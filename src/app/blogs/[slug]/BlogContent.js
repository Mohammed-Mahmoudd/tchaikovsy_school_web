"use client";

import NavigationBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function BlogContent({ content, title, whatsappNumber }) {
  const [sections, setSections] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});

  useEffect(() => {
    // Parse the HTML content and create sections
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const parsedSections = [];

    let currentSection = null;
    let sectionIndex = 0;

    const elements = Array.from(doc.body.children);

    elements.forEach((element, index) => {
      if (element.tagName === "H2" || element.tagName === "H3") {
        // Start a new section
        if (currentSection) {
          parsedSections.push(currentSection);
        }

        currentSection = {
          id: `section-${sectionIndex}`,
          title: element.textContent,
          level: parseInt(element.tagName.charAt(1)),
          content: [],
          index: sectionIndex,
        };
        sectionIndex++;
      } else if (currentSection) {
        // Add content to current section
        currentSection.content.push(element.outerHTML);
      } else {
        // Content before first heading - create intro section
        if (!currentSection) {
          currentSection = {
            id: "intro-section",
            title: "Introduction",
            level: 2,
            content: [],
            index: 0,
          };
        }
        currentSection.content.push(element.outerHTML);
      }
    });

    // Add the last section
    if (currentSection) {
      parsedSections.push(currentSection);
    }

    setSections(parsedSections);

    // Initialize all sections as expanded
    const initialState = {};
    parsedSections.forEach((section) => {
      initialState[section.id] = false; // false means expanded
    });
    setCollapsedSections(initialState);
  }, [content]);

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const addWhatsAppLinksToContent = (htmlContent, sectionTitle) => {
    // Add WhatsApp contact links after paragraphs
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Find all paragraphs
    const paragraphs = doc.querySelectorAll("p");

    paragraphs.forEach((p, index) => {
      // Add WhatsApp link after every 2-3 paragraphs
      if ((index + 1) % 3 === 0) {
        const whatsappLink = doc.createElement("div");
        whatsappLink.className =
          "my-4 p-3 bg-green-50 border border-green-200 rounded-lg";
        whatsappLink.innerHTML = `
          <p class="text-sm text-green-700 mb-2">💡 Have questions about ${sectionTitle}s?</p>
          <a 
            href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hi! I have a question about the section ${sectionTitle} from your article "${title}"`
        )}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Ask us on WhatsApp
          </a>
        `;
        p.parentNode.insertBefore(whatsappLink, p.nextSibling);
      }
    });

    return doc.body.innerHTML;
  };

  if (sections.length === 0) {
    return (
      <div className="blog-content prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }

  return (
    <div className="blog-content">
      {/* Table of Contents */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Table of Contents
        </h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-blue-600 hover:text-blue-800 transition-colors ${
                section.level === 3 ? "ml-4 text-sm" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200 flex items-center justify-between text-left"
            >
              <h2
                className={`font-bold text-gray-900 ${
                  section.level === 2 ? "text-xl" : "text-lg"
                }`}
              >
                {section.title}
              </h2>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  collapsedSections[section.id] ? "" : "transform rotate-180"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                collapsedSections[section.id] ? "max-h-0" : "max-h-none"
              }`}
            >
              <div className="px-6 py-4 prose max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: addWhatsAppLinksToContent(
                      section.content.join(""),
                      section.title
                    ),
                  }}
                />

                {/* Section-specific CTA */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700 mb-3">
                    💬 Want to discuss "{section.title}" further?
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi! I&apos;d like to discuss the "${section.title}" section from your article "${title}"`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Let&apos;s Chat About This
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-gray-200 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Take Action?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you found this article helpful and want to implement these
          strategies for your business, let&apos;s have a conversation about how
          we can help you succeed.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hi! I just finished reading your article "${title}" and I&apos;m interested in working with you. Can we discuss how you can help my business?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Get Personalized Help
        </a>
      </div>

      {/* Expand/Collapse All Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => {
            const newState = {};
            sections.forEach((section) => {
              newState[section.id] = false; // false means expanded
            });
            setCollapsedSections(newState);
          }}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-md transition-colors duration-200"
        >
          Expand All Sections
        </button>
        <button
          onClick={() => {
            const newState = {};
            sections.forEach((section) => {
              newState[section.id] = true; // true means collapsed
            });
            setCollapsedSections(newState);
          }}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors duration-200"
        >
          Collapse All Sections
        </button>
      </div>
    </div>
  );
}

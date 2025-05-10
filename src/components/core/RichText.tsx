// src/components/ui/RichText.tsx
import React from "react";
import { Heading, Text, Quote } from "./Typography";

// Define more specific types for each block type
type HeadingBlock = {
  type: "heading";
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "primary" | "secondary" | "tertiary" | "accent" | "brand";
};

type ParagraphBlock = {
  type: "paragraph";
  text?: string;
};

type QuoteBlock = {
  type: "quote";
  text?: string;
  author?: string;
  source?: string;
};

type ListBlock = {
  type: "list";
  items?: string[];
  style?: "ordered" | "unordered";
};

type CalloutBlock = {
  type: "callout";
  text?: string;
  title?: string;
  style?: "primary" | "secondary" | "accent";
};

type DividerBlock = {
  type: "divider";
};

// Union type of all possible blocks
export type RichTextBlock =
  | HeadingBlock
  | ParagraphBlock
  | QuoteBlock
  | ListBlock
  | CalloutBlock
  | DividerBlock
  | { type: string; text?: string; [key: string]: unknown };

interface RichTextProps {
  content: RichTextBlock[];
  className?: string;
}

/**
 * RichText component for rendering structured content
 *
 * This component accepts an array of content blocks with types like:
 * - paragraph
 * - heading
 * - quote
 * - list
 * - callout
 *
 * It renders each block with the appropriate Typography component
 */
const RichText: React.FC<RichTextProps> = ({ content, className = "" }) => {
  if (!content || !content.length) return null;

  return (
    <div className={`rich-text ${className}`}>
      {content.map((block, index) => {
        // Generate a stable key
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph": {
            const paragraphBlock = block as ParagraphBlock;
            return <Text key={key}>{paragraphBlock.text}</Text>;
          }

          case "heading": {
            const headingBlock = block as HeadingBlock;
            return (
              <Heading
                key={key}
                level={headingBlock.level || 2}
                color={headingBlock.color || "primary"}
              >
                {headingBlock.text}
              </Heading>
            );
          }

          case "quote": {
            const quoteBlock = block as QuoteBlock;
            return (
              <Quote
                key={key}
                author={quoteBlock.author}
                source={quoteBlock.source}
              >
                {quoteBlock.text}
              </Quote>
            );
          }

          case "list": {
            const listBlock = block as ListBlock;
            const items = listBlock.items || [];

            if (listBlock.style === "ordered") {
              return (
                <ol key={key} className="list-decimal pl-6 mb-6">
                  {items.map((item, i) => (
                    <li key={`${key}-item-${i}`} className="mb-2">
                      <Text as="span" className="mb-0">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ol>
              );
            } else {
              return (
                <ul key={key} className="list-disc pl-6 mb-6">
                  {items.map((item, i) => (
                    <li key={`${key}-item-${i}`} className="mb-2">
                      <Text as="span" className="mb-0">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              );
            }
          }

          case "callout": {
            const calloutBlock = block as CalloutBlock;
            return (
              <div
                key={key}
                className={`
                  p-6 my-6 rounded-md
                  ${calloutBlock.style === "primary" ? "bg-brand-primary/10 border-l-4 border-brand-primary" : ""}
                  ${calloutBlock.style === "secondary" ? "bg-brand-secondary/10 border-l-4 border-brand-secondary" : ""}
                  ${calloutBlock.style === "accent" ? "bg-brand-accent/10 border-l-4 border-brand-accent" : ""}
                `}
              >
                {calloutBlock.title && (
                  <Heading level={4} className="mb-2">
                    {calloutBlock.title}
                  </Heading>
                )}
                <Text className="mb-0">{calloutBlock.text}</Text>
              </div>
            );
          }

          case "divider":
            return (
              <hr key={key} className="my-8 border-t border-bg-tertiary" />
            );

          default: {
            // Safely access text property which might not exist on all block types
            const text = 'text' in block ? block.text : '';
            return <Text key={key}>{text || ""}</Text>;
          }
        }
      })}
    </div>
  );
};

/**
 * Example usage demonstration component
 */
export const RichTextDemo: React.FC = () => {
  // Sample rich text content
  const sampleContent: RichTextBlock[] = [
    {
      type: "heading",
      level: 1,
      text: "Crafting Compelling Copy",
    },
    {
      type: "paragraph",
      text: "Great copy doesn't just convey information—it tells a story, evokes emotion, and inspires action. At The Copy Social, we believe in the power of words to transform your brand.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why Words Matter",
    },
    {
      type: "paragraph",
      text: "In a digital world filled with noise, the right words can cut through the clutter and connect directly with your audience. Every headline, every paragraph, every call-to-action is an opportunity to strengthen your relationship with potential customers.",
    },
    {
      type: "quote",
      text: "Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble.",
      author: "Yehuda Berg",
    },
    {
      type: "heading",
      level: 3,
      text: "Our Approach",
    },
    {
      type: "paragraph",
      text: "We don't just write words—we craft messages that resonate. Our proven process includes:",
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "Deep audience research to understand what drives your customers",
        "Strategic brand messaging that positions you in the market",
        "Conversion-focused copy that turns readers into customers",
        "SEO optimization that helps you get found online",
      ],
    },
    {
      type: "callout",
      style: "primary",
      title: "Ready to Transform Your Copy?",
      text: "Book a free discovery call to discuss how we can help elevate your brand messaging and connect with your ideal audience.",
    },
    {
      type: "divider",
    },
    {
      type: "paragraph",
      text: "Let's create something extraordinary together.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <RichText content={sampleContent} />
    </div>
  );
};

export default RichText;
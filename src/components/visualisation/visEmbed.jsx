import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import { ImEmbed2 } from "react-icons/im";
import { MdCancel, MdError, MdContentCopy } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

/**
 * Embed button for visualisation items
 * Retrieve the element <EmbedCode> in <VisPagination> and render its content
 * <EmbedCode> has the following properties:
 *  - custom: <boolean> whether the author passed custom embed code (default to false)
 *  - url: <string> external url of the visualisation to be embed
 *  - height: <string> height of the visualisation in px (default to 550px)
 *  - type: <string> type of the visualisation to be embed: "image" (default) / "iframe"
 *
 * IF url is not specified, use localPath to get one of the saved images
 *  - localPath: <string> name of the image property in frontmatter to use: "svgExternalImagePath", "svgImagePath", "pngImagePath", "pngExternalImagePath"
 */
const VisEmbed = (props) => {
  const [embedMenu, setEmbedMenu] = useState(false);
  const [embedCode, setEmbedCode] = useState("");

  // process content in <EmbedCode>
  useEffect(() => {
    // find the <EmbedCode> element
    const filtered = React.Children.toArray(props.children).filter((child) => {
      return child.props.mdxType == "EmbedCode";
    });

    if (filtered.length == 0) {
      return;
    }

    // check if <EmbedCode> contains custom code script
    if (filtered[0].props.custom === true) {
      const customContent = ReactDOMServer.renderToStaticMarkup(
        filtered[0].props.children
      );
      const htmlString = "```html" + "\n" + customContent + "\n" + "```";

      setEmbedCode(htmlString.trim());
      return;
    }

    // create default embed code
    const htmlTemplate = getCodeTemplate(
      props.mdx,
      filtered[0].props.type || "image",
      filtered[0].props.url || "",
      filtered[0].props.localPath || "",
      filtered[0].props.height || "550px"
    );
    setEmbedCode(htmlTemplate);
  }, [props]);

  // Hide code block's scrollbar & wrap code block
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let element = document
      ?.querySelector("#embedMenu")
      ?.querySelector(".gatsby-highlight > pre > div");

    if (element && !element?.classList?.contains("hideScrollBar")) {
      element.classList.add("hideScrollBar");
    }
  }, [embedMenu]);

  // Copy Embed code to the clipboard
  function copyEmbedCode() {
    let element = document
      .querySelector("#embedMenu")
      .querySelector(".gatsby-highlight");
    let copyText = element.innerText || element.textContent;

    // create an input element for copying to clipboard
    let input = document.body.appendChild(document.createElement("input"));
    input.value = copyText;
    input.select();
    document.execCommand("copy");
    input.parentNode.removeChild(input);

    // Change button style
    let copyBtn = document.querySelector("#copyEmbedCodeBtn");
    let originText = copyBtn.innerHTML;
    copyBtn.classList.add("bg-green-200");
    copyBtn.innerHTML = "Copied!";

    setTimeout(() => {
      copyBtn.innerHTML = originText;
      copyBtn.classList.remove("bg-green-200");
    }, 3000);
  }

  return (
    <div className="text-7xl" title="Embed visualisation">
      <button
        aria-label="Embed Visualisation"
        onClick={() => setEmbedMenu(!embedMenu)}
        className="py-1 px-2 text-white bg-black hover:bg-white hover:text-black flex justify-center rounded-md text-xl cursor-pointer"
      >
        <ImEmbed2 />
      </button>
      <div
        id="embedMenu"
        className={`fixed rounded-lg py-5 px-6 text-left text-gray-700`}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "800px",
          userSelect: "text",
          backgroundColor: "#f7f7f7",
          boxShadow: "0 10px 50px -5px #9ADBE8",
          zIndex: embedMenu ? "999" : "0",
          display: embedMenu ? "" : "none"
        }}
      >
        {!embedCode && (
          <div style={{ maxWidth: "450px" }}>
            <MdError className="mx-auto text-5xl text-red-500 mb-2 font-semibold" />
            <h5 className="text-lg w-full text-center">
              Embed code is not provided for this visualisation, please contact
              the author for more information.
            </h5>
          </div>
        )}

        <ReactMarkdown
          className="gatsby-highlight text-lg"
          components={mdComponents}
          skipHtml={true}
        >
          {embedCode}
        </ReactMarkdown>

        {embedCode && (
          <div
            id="copyEmbedCodeBtn"
            onClick={() => copyEmbedCode()}
            className="w-full mt-2 text-xl bg-gray-200 rounded-lg text-gray-900 hover:bg-brand-blue p-3 text-center transition duration-500 font-semibold cursor-pointer"
          >
            Copy embed code{" "}
            <MdContentCopy className="text-2xl inline-block ml-1" />
          </div>
        )}

        {/* cancel button */}
        <button
          onClick={() => setEmbedMenu(!embedMenu)}
          className="text-gray-500 hover:text-brand-blue rounded-md transition duration-300 text-3xl p-1 absolute top-0 right-0 flex items-center"
          title="Close embed menu"
          aria-label="Close embed menu"
        >
          <MdCancel />
        </button>
      </div>
    </div>
  );
};

VisEmbed.propTypes = {
  props: PropTypes.any,
  children: PropTypes.any,
  mdx: PropTypes.object
};

export default VisEmbed;

/**
 * Get embed code template based on type and URL.
 * @param {object} mdx current mdx object
 * @param {string} type type of item to embed: image (default), iframe
 * @param {string} url external url address of the item
 * @param {string} localPath name of the image property in frontmatter to use: svgExternalImagePath, svgImagePath, pngImagePath, pngExternalImagePath
 * @param {string} height height of the embed item
 * @returns
 */
export function getCodeTemplate(
  mdx,
  type = "image",
  url = "",
  localPath = "",
  height = "550px"
) {
  const PAGE_URL = `https//dataviz.shef.ac.uk${mdx.fields.slug}`;
  let urlToUse = url;

  if (localPath) {
    urlToUse = localPath.includes("External")
      ? mdx.frontmatter?.[localPath]
      : `${mdx.folderLink}/${mdx.frontmatter?.[localPath]?.relativePath}`;
  }

  if (type == "iframe") {
    return (
      "```html" +
      "\n" +
      `<a href="${PAGE_URL}" target="_blank">` +
      "\n" +
      `  <iframe width="100%" height="${height}" src="${urlToUse}" />` +
      "\n" +
      "</a>" +
      "\n" +
      "```"
    );
  }

  return `
  \`\`\`html
  <a 
    href="${PAGE_URL}" 
    target="_blank"
  >
    <img 
      alt="${mdx.frontmatter.title}" 
      src="${urlToUse}" 
      style="height: ${height}; width:auto" 
    />
  </a>
  \`\`\`
  `;
}

import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Add Syntax highlight to code block
 */
const mdComponents = {
  // eslint-disable-next-line no-unused-vars
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={materialDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};

mdComponents.code.propTypes = {
  node: PropTypes.object,
  inline: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
  props: PropTypes.any
};

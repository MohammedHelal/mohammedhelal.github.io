import { useEffect } from "react";
import TagCloud from "TagCloud";
import { tagShpereIcons } from "../../../utils/svgIcons";
import "./TagSphere.css";
import { useMediaQuery } from "react-responsive";

function TagSphere() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tag-sphere";
    const texts = [
      tagShpereIcons.html,
      tagShpereIcons.css,
      tagShpereIcons.javascript,
      tagShpereIcons.react,
      tagShpereIcons.next,
      tagShpereIcons.nodejs,
      tagShpereIcons.github,
      tagShpereIcons.postgresql,
      tagShpereIcons.csharp,
      tagShpereIcons.aspnet,
      tagShpereIcons.mssql,
    ];

    const options = {
      radius: isMobile ? 175 : 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
      useHTML: true,
    };

    if (!document.querySelector(".tagcloud")) {
      TagCloud(container, texts, options);
    } else {
      document.querySelector(".tagcloud").remove();
      TagCloud(container, texts, options);
    }

    return () => {};
  }, [isMobile]);

  return (
    <>
      <div className="tag-sphere"></div>
    </>
  );
}

export default TagSphere;

import React from "react";

const Picture = ({ data }) => {
  const downloadImage = async (url, filename = "download.jpg") => {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="picture">
      <p>
        Photographer:
        {data.photographer.length > 20
          ? data.photographer.slice(0, 20) + "..."
          : data.photographer}
      </p>

      <div
        className="imageContainer"
        onClick={() => window.open(data.src.large, "_blank")}
      >
        <img src={data.src.large} alt="" style={{ width: "100%" }} />
        <div className="seeMore">see more</div>
      </div>

      <p>
        download : {/* target="_blank" */}
        <a
          href={data.src.large}
          onClick={(e) => {
            e.preventDefault();
            downloadImage(data.src.large, `photo-${data.id}.jpg`);
          }}
        >
          click
        </a>
      </p>
    </div>
  );
};

export default Picture;

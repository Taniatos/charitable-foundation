import React, { useState, useEffect } from "react";
import "./News.css";

function News() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const updatePostsPerPage = () => {
      setPostsPerPage(window.innerWidth < 1160 ? 1 : 3);
    };

    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);

    return () => window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  const facebookPosts = [
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid029TpryALjbbqzjPuajBNCGRVmWH5BnvGAPBh53yD7Ux9MyHZNqarhUKJmK7hJ9bA7l%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02g9jRvF1cAYSo5d3gzQhHfiw2cmcaaTgTBF3hPbVFThA3C7vqDn42d3d8j4DAM6zel%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0w5svQpiLVgLdkwzpyTSREVnNjme29nyTtERNFiY9vy4h2Fk2MYTmq8jJAtUVzMewl%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ruedt5p3wYjsokCB7wkJwfEFVhEkNRj6PiwwgbySTEdPo3ajnbYsmBwGyqM1AZwsl%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0tFJJXQKySde53yQoLK5HoAeQxt7W1YvTJM7yWgHNcgVKBrzDiPg3YrCZha3NvaYql%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02YjmjpLcuB6b5i7f6ydowaKhBjb8CeRygvsGY6d2UxoZ8n8gSctVgGe3FygpJfrPql%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0W1kENJRBFrYDkZzGgy4uckQKJ2hQrs4rg6VNPws8bc7ge2Ty5hwt8oruVhKarRFPl%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02aagt9WsADAtFy6My1SM5snCpEtSZwbfdTabqdoNbF5XDxRK7JsGshKexGNRG7hLyl%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02hi3oVrBDvkAc4Q6McNivURJZHbGrCky3KTXiQS1PaAvVAMbHY4xU2QQHAp7Hp6vAl%26id%3D61550806190048&show_text=false&appId",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02oepq1fsinpbMP7FG5dcAUShr6MUr36C5XgRPHckA3nvJM4Hqck4e8z4SNRRqzA3rl%26id%3D61550806190048&show_text=false&appId",
  ];

  const goToNextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % facebookPosts.length);
  };

  const goToPrevSlide = () => {
    setCarouselIndex(
      (prevIndex) =>
        (prevIndex - 1 + facebookPosts.length) % facebookPosts.length
    );
  };

  const renderPosts = () => {
    let posts = [];
    for (let i = 0; i < postsPerPage; i++) {
      let index = (carouselIndex + i) % facebookPosts.length;
      posts.push(
        <div className="iframe-each" key={index}>
          <iframe
            src={facebookPosts[index]}
            style={{ border: "none", overflow: "hidden" }}
            width="370"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            title="facebook post"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      );
    }
    return posts;
  };

  return (
    <section className="news-page">
      <div className="wrapper">
        <h1 className="news-page-header">НОВИНИ</h1>
        <div className="news-carousel-wrapper">{renderPosts()}</div>
        <button onClick={goToPrevSlide} className="news-button-prev">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/783/original/prev.png?1697415327"
            alt="prev"
            width={60}
          />
        </button>
        <button onClick={goToNextSlide} className="news-button-next">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/784/original/prev-1.png?1697415335"
            alt="next"
            width={60}
          />
        </button>
      </div>
    </section>
  );
}

export default News;

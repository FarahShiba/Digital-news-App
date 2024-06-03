import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PreLoader } from "@/components/layout/preLoader/PreLoader";
import Image from "next/image";
import styles from "../pages.module.css";
import { SidePostItem } from "@/components/layout/sidePostItem/SidePostItem";
import Link from "next/link";

const PostItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabsData = [
    {
      id: 1,
      name: "Popular",
      active: true,
    },
    {
      id: 2,
      name: "Trending",
      active: false,
    },
  ];

  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        tab.active = tab.id === id;
        return tab;
      })
    );
  };

  const getSinglePostData = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/postitems/${id}`);
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log("Database", data.data);
      if (!data.data) {
        throw new Error("No data found for this post");
      }
      setItem(data.data);
    } catch (error) {
      console.error("Failed to fetch item:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/postitems");
      const data = await response.json();
      const filteredData = data.data.filter(
        (item) => item.img !== "path/to/girls-picture.jpg"
      );
      setItems(filteredData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch items:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    if (id) {
      getSinglePostData(id);
    }
  }, [id]);

  // handle Delete post By id
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/postitems/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`
        );
      }
      router.push("/postitems");
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <main id="main">
      <section>
        <Container>
          <Row>
            <Col md={9} className={styles.postContent}>
              {loading ? (
                <PreLoader />
              ) : error ? (
                <p>Error fetching post: {error}</p>
              ) : !item ? (
                <p>Post not found.</p>
              ) : (
                <div>
                  <div className={styles.postMeta}>
                    <span>{item.category}</span>
                    <i className="bi bi-dot mx-1"></i>
                    <span>
                      {new Date(item.date).toLocaleDateString("en-AU")}
                    </span>
                  </div>
                  <h1 className="mb-5">{item.title}</h1>
                  <p>
                    <span className={styles.firstCharacter}>
                      {item.description.charAt(0)}
                    </span>
                    {item.description.substring(1)}
                  </p>
                  <figure className="my-4">
                    <Image
                      src={`/${item.img}`}
                      alt={item.title}
                      layout="responsive"
                      width={700}
                      height={475}
                    />

                    <figcaption>{item.description}</figcaption>
                  </figure>
                  <p>
                    People had always been the life of the party. With her
                    infectious laugh and boundless energy, she was the friend
                    everyone wanted to be around. But beneath the surface, Emily
                    was struggling. The pressure to maintain her upbeat persona
                    was taking its toll, and she found herself sinking into a
                    deep sadness that she couldn't shake off.
                  </p>
                  <p>
                    As the weeks went by, People's sadness turned into anxiety.
                    Simple tasks like getting out of bed or going to work felt
                    insurmountable. She started avoiding friends, making excuses
                    to stay home. Her performance at work suffered, and she felt
                    like she was constantly on the verge of tears. One evening,
                    after yet another day of feeling overwhelmed, Emily broke
                    down in front of her best friend, Sarah. Through her sobs,
                    she confessed how she had been feeling. Sarah listened
                    patiently, her eyes filled with concern.
                  </p>
                  <div className="d-flex justify-content-center gap-4">
                    <a
                      className="btn btn-primary"
                      onClick={() => handleDelete(id)}
                    >
                      <i className="bi bi-trash"></i>
                    </a>
                    <Link
                      href={`/createpostitems/${item._id}`}
                      className="btn btn-primary"
                    >
                      <i className="bi bi-pen-fill"></i>
                    </Link>
                  </div>
                </div>
              )}
            </Col>
            <Col md={3}>
              <div className={styles.asideBlock}>
                <ul className="nav nav-pills customTabNav mb-4">
                  {tabs.map((tab) => (
                    <li className={styles.navItem}>
                      <Button
                        className={`nav-link ${
                          tab.active ? "active" : undefined
                        }`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </Button>
                    </li>
                  ))}
                </ul>
                <div className={styles.tabContent}>
                  <div
                    className={`${styles.tabPane} fade ${
                      tabs[0].active ? "show active" : ""
                    }`}
                  >
                    {items.slice(0, 4).map((item) => (
                      <SidePostItem key={item._id} item={item} />
                    ))}
                  </div>
                  <div
                    className={`${styles.tabPane} fade ${
                      tabs[1].active ? "show active" : ""
                    }`}
                  >
                    {items.slice(4, 8).map((item) => (
                      <SidePostItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default PostItem;

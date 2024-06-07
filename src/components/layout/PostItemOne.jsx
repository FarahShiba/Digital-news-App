import Link from "next/link";
import styles from "./postItemOne.module.css";
import { Card } from "react-bootstrap";
import Image from "next/image";

const PostItemOne = ({ item, onClick, showDetail }) => {
  return (
    <Card className={styles.postEntry1} onClick={onClick}>
      <Link href={`/postitems/${item?._id}`} passHref legacyBehavior>
        <a>
          <Image
            src={`/${item.img}`}
            alt={item.title}
            layout="responsive"
            width={700}
            height={475}
            className={`${styles.image} img-fluid`}
            quality={50}
            placeholder="blur"
            blurDataURL={`/${item.img}`}
            sizes="(max-width: 600px) 100vw, 600px"
            fetchpriority="high"
            loading="eager"
          />
        </a>
      </Link>
      <Card.Body>
        <div className={styles.postMeta}>
          <span className={styles.date}>{item.category}</span>
          <span className="mx-1">
            <i className="bi bi-dot"></i>
          </span>
          <span>{new Date(item.date).toLocaleDateString("en-AU")}</span>
        </div>
        <Card.Title>
          <Link href={`/postitems/${item._id}`} passHref legacyBehavior>
            <a>{item.title}</a>
          </Link>
          {showDetail && (
            <div>
              <p className={styles.desc}>{item.description}</p>
              <div className={styles.authorAvatar}>
                <Image
                  src={`/${item.avatar}`}
                  alt={item.author}
                  width={40}
                  height={40}
                  className={styles.authorImage}
                  quality={50}
                  placeholder="blur"
                  blurDataURL={`/${item.avatar}`}
                  sizes="(max-width: 600px) 100vw, 600px"
                  fetchpriority="high"
                />
              </div>
              <div className={styles.authorName}>
                <p>{item.author}</p>
              </div>
            </div>
          )}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PostItemOne;

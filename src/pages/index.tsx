import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

function HomepageBody() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Start safe and fast programming
            <br />
            with <span className={styles.highlight}>Rust</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Boost your development skills with a systems programming language
            that offers both memory safety and high performance.
          </p>
          <div className={styles.heroCta}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Start Learning
            </Link>
            <Link className={styles.secondaryButton} to="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="./img/crab.png" alt="cute crab" />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Rust?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Memory Safety</h3>
            <p className={styles.featureDescription}>
              Catch memory errors at compile time and write safer programs.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Concurrency</h3>
            <p className={styles.featureDescription}>
              Achieve efficient and race-free concurrent programming.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Performance</h3>
            <p className={styles.featureDescription}>
              Enjoy speed and resource efficiency comparable to C/C++.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Ecosystem</h3>
            <p className={styles.featureDescription}>
              A vibrant community and rich library ecosystem enable fast
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className={styles.roadmap}>
        <h2 className={styles.sectionTitle}>Rust Learning Roadmap</h2>
        <div className={styles.roadmapList}>
          <div className={styles.roadmapItem}>
            <span className={styles.roadmapNumber}>01</span>
            <div className={styles.roadmapContent}>
              <h3 className={styles.roadmapTitle}>Basic Syntax</h3>
              <p className={styles.roadmapDescription}>
                Learn about variables, functions, control flow, and basic data
                types.
              </p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <span className={styles.roadmapNumber}>02</span>
            <div className={styles.roadmapContent}>
              <h3 className={styles.roadmapTitle}>Ownership & Borrowing</h3>
              <p className={styles.roadmapDescription}>
                Understand Rust’s core concepts: ownership and borrowing.
              </p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <span className={styles.roadmapNumber}>03</span>
            <div className={styles.roadmapContent}>
              <h3 className={styles.roadmapTitle}>Structs & Enums</h3>
              <p className={styles.roadmapDescription}>
                Learn how to define and use custom data types.
              </p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <span className={styles.roadmapNumber}>04</span>
            <div className={styles.roadmapContent}>
              <h3 className={styles.roadmapTitle}>Error Handling & Testing</h3>
              <p className={styles.roadmapDescription}>
                Learn techniques for building reliable programs through error
                handling and testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className={styles.recentPosts}>
        <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
        <div className={styles.postGrid}>
          <div className={styles.postCard}>
            <span className={styles.postTag}>Beginner</span>
            <h3 className={styles.postTitle}>
              Mastering Rust's Ownership System
            </h3>
            <p className={styles.postExcerpt}>
              Dive deep into Rust’s unique ownership model and how it keeps your
              programs safe.
            </p>
            <span className={styles.postDate}>May 15, 2025</span>
          </div>
          <div className={styles.postCard}>
            <span className={styles.postTag}>Intermediate</span>
            <h3 className={styles.postTitle}>
              Building a Web Server with Rust
            </h3>
            <p className={styles.postExcerpt}>
              Learn to develop high-performance web servers using Actix-web.
            </p>
            <span className={styles.postDate}>May 10, 2025</span>
          </div>
          <div className={styles.postCard}>
            <span className={styles.postTag}>Advanced</span>
            <h3 className={styles.postTitle}>Mastering Rust’s Macro System</h3>
            <p className={styles.postExcerpt}>
              Learn how to automate code generation with declarative and
              procedural macros.
            </p>
            <span className={styles.postDate}>May 5, 2025</span>
          </div>
        </div>
        <div className={styles.viewAllContainer}>
          <a href="#" className={styles.viewAllLink}>
            View All Posts
          </a>
        </div>
      </section>

      {/* Community Section */}
      <section className={styles.community}>
        <h2 className={styles.sectionTitle}>
          Grow Together with the Community
        </h2>
        <p className={styles.communityDescription}>
          Ask questions, learn, and share. Be part of the Rust developer
          community.
        </p>
        <div className={styles.communityButtons}>
          <button className={styles.primaryButton}>Join Community</button>
          <button className={styles.secondaryButton}>View Discussions</button>
        </div>
      </section>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A simple and clean Rust study blog powered by Docusaurus"
    >
      <HomepageBody />
    </Layout>
  );
}

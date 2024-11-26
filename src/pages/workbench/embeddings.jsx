import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { MetaSEO } from '/src/theme/MetaSEO';
import appData from '/data/apps.json';
import styles from '/src/components/Marketplace/styles.module.scss';
import AppCard from '/src/components/Marketplace/card';

export default function QueryPage() {
  const app = appData.find((app) => app.id === 'embeddings');

  if (!app) return <div>App not found</div>;

  return (
    <div className="custom-page noBG">
      <Layout
        title="Embeddings | Weaviate Workbench"
        description="Build personalized, multi-modal recommendations with simple interface."
      >
        <MetaSEO />
        <div className="container">
          <div className={styles.breadCrumbs}>
            <Link to="/workbench">
              <div className={styles.home} />
            </Link>
            <div className={styles.arrow} />
            <span>
              {app.category}: <Link to={app.url}>{app.name}</Link>
            </span>
          </div>
          <div className={styles.appContainer}>
            <div className={`${styles.sidebar} ${styles.mini}`}>
              <Link to="/workbench" className={styles.backButton}>
                Workbench
              </Link>
            </div>
            <div className={styles.mainContent}>
              <div className={styles.appDetailHeader}>
                <img src={'/img/site/' + app.image} alt={app.name} />
                <div>
                  <h1>{app.name}</h1>
                  <p>{app.description}</p>
                  {app.released === 'no' ? (
                    <Link to="https://events.weaviate.io/early-access">
                      <button className={styles.installButton}>
                        Request Preview Access
                      </button>
                    </Link>
                  ) : (
                    <Link to="https://console.weaviate.cloud/">
                      <button className={styles.installButton}>
                        Open in Weaviate Cloud Request Preview Access
                      </button>
                    </Link>
                  )}
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.overviewImage}>
                    <img
                      className={styles.smallScreen}
                      src={'/img/site/' + app.overviewImage1}
                      alt={app.name}
                    />
                    <img
                      className={styles.smallScreen}
                      src={'/img/site/' + app.overviewImage2}
                      alt={app.name}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.appDetailContent}>
                <div className={styles.tabBottomContent}>
                  <div>
                    <h3>Overview</h3>
                    <p>
                      Weaviate Embeddings is a service in Weaviate Cloud that
                      simplifies the creation and management of vector
                      embeddings. With Weaviate Embeddings, developers can
                      access to various embedding models without needing to send
                      data to an external provider.
                    </p>
                    <ul>
                      <li>
                        <strong>Fast, flexible development:</strong> Simply
                        operations with one less API and vendor to manage.
                        Choose between class-leading OSS and proprietary models.
                      </li>
                      <li>
                        <strong>Freedom from rate limits:</strong> Bring models
                        closer to your data to reduce latency. Enable limitless
                        embeddings per second without artificial constraints.
                      </li>
                      <li>
                        <strong>GPU-powered and cost-efficient:</strong>
                        Maximize performance while managing costs with simple,
                        pay-as-you-go pricing.
                      </li>
                    </ul>
                    <strong>Details and Pricing</strong>
                    <p>
                      Weaviate Embeddings is now available in Preview with the{' '}
                      <strong>Snowflake arctic-embed-v-1.15 text</strong>{' '}
                      embedding model.
                    </p>
                    <p>
                      When generally available, pricing will start at $0.04 per
                      million tokens.
                    </p>
                  </div>

                  <div className={styles.additionalInfo}>
                    <h3>Additional details</h3>
                    <p>
                      Availabilty:{' '}
                      <Link to="https://events.weaviate.io/early-access">
                        <strong>Preview</strong>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.appDivider} />
              <div className={styles.relatedApps}>
                <h3>Related Products</h3>
                <div className={styles.cardContainer}>
                  {appData
                    .filter(
                      (relatedApp) =>
                        relatedApp.category === app.category &&
                        relatedApp.id !== app.id
                    )
                    .map((relatedApp) => (
                      <AppCard key={relatedApp.id} app={relatedApp} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
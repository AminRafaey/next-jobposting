import axios from "axios";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: "Master Level Software Engineer",
    description:
      "<p>Tkturners aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services. with zaeem awais</p>",
    identifier: {
      "@type": "PropertyValue",
      name: "Google",
      value: "1234567",
    },
    datePosted: "2024-01-09",
    validThrough: "2024-03-18T00:00",
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "Tkturners company",
      sameAs: "https://tkturners.com",
      logo: "https://i.ibb.co/0rHJT8H/attachment-83274209-e1494364212313.jpg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Street 10 Sector G",
        addressLocality: "DHA Phase 6",
        addressRegion: "LHR",
        postalCode: "54810",
        addressCountry: "PK",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "PKR",
      value: {
        "@type": "QuantitativeValue",
        value: 103.0,
        unitText: "HOUR",
      },
    },
  };

  const handleNotifyUrl = async () => {
    try {
      const response = await axios.post("/api/getAccessToken");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
   
  const getStatus = async () => {
    try {
      const response = await axios.get("/api/getStatus");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="google-site-verification" content="MGIW7l4ghP3JM5lJZ1Ur8VQm9O4S-IOZiNFX2QskOTA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        Home Page
        <div>
          <button onClick={handleNotifyUrl}>Notify URL</button>
          <button onClick={getStatus}>GET STATUS</button>
        </div>
      </main>
    </>
  );
}

import Link from 'next/link';

const articles = [
  {
    title: "How to Choose the Right Digital Marketing Channels for Your Business",
    description:
      "A practical starting point for choosing between website improvements, SEO, local SEO, paid advertising and social media based on how customers search and buy.",
  },
  {
    title: "What Makes a Business Website Ready for Search and Enquiries?",
    description:
      "The essential building blocks: clear service pages, useful content, fast mobile performance, internal links and a straightforward way for visitors to contact you.",
  },
  {
    title: "Local SEO Basics: Helping Nearby Customers Find Your Business",
    description:
      "Understand the role of accurate business information, Google Business Profile optimization, service-area pages, reviews and locally relevant website content.",
  },
];

export default function BlogComponent() {
  return (
    <main className="py-5">
      <div className="container">
        <header className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <p className="text-uppercase small fw-semibold mb-2">Jaiswal Digital Insights</p>
            <h1>Digital Marketing, SEO and Website Growth Guides</h1>
            <p className="lead mb-0">
              Practical resources for Indian businesses that want to make better
              decisions about their website, search visibility and online
              marketing.
            </p>
          </div>
        </header>

        <section aria-label="Featured guides" className="row g-4">
          {articles.map((article) => (
            <article className="col-md-4" key={article.title}>
              <div className="border rounded h-100 p-4 bg-white">
                <p className="small text-uppercase fw-semibold">Digital growth guide</p>
                <h2 className="h4">{article.title}</h2>
                <p>{article.description}</p>
                <Link href="/contact" className="text-decoration-none fw-semibold">
                  Discuss this with our team <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="row justify-content-center mt-5">
          <div className="col-lg-9">
            <h2>Need a tailored digital growth plan?</h2>
            <p>
              There is no single channel that suits every business. The right
              plan depends on your audience, location, offer, competition and
              current website. Jaiswal Digital can help you identify practical
              priorities across website development, SEO, local SEO, paid ads,
              social media and e-commerce support.
            </p>
            <Link href="/services" className="btn btn-dark me-2">Explore services</Link>
            <Link href="/contact" className="btn btn-outline-dark">Contact Jaiswal Digital</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const articles = [
    {
      title: 'Tax Planning Strategies for 2025',
      excerpt: 'Discover effective tax planning strategies to minimize your tax liability and maximize your savings for the upcoming year.',
      date: 'October 15, 2025',
      category: 'Tax Planning',
      image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudHMlMjBhY2NvdW50aW5nfGVufDF8fHx8MTc2MTgxMzMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Small Business Bookkeeping Best Practices',
      excerpt: 'Learn the essential bookkeeping practices every small business owner should implement for better financial management.',
      date: 'October 10, 2025',
      category: 'Bookkeeping',
      image: 'https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29ra2VlcGluZyUyMGxlZGdlciUyMG9yZ2FuaXplZHxlbnwxfHx8fDE3NjE4MTMzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Understanding Corporate Tax Deductions',
      excerpt: 'A comprehensive guide to corporate tax deductions that can help your business save money while staying compliant.',
      date: 'October 5, 2025',
      category: 'Corporate Tax',
      image: 'https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNzY1MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Payroll Compliance: What You Need to Know',
      excerpt: 'Stay compliant with the latest payroll regulations and avoid costly penalties with our expert guidance.',
      date: 'September 28, 2025',
      category: 'Payroll',
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzE2ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Financial Planning for Personal Success',
      excerpt: 'Essential financial planning tips to help you achieve your personal financial goals and secure your future.',
      date: 'September 20, 2025',
      category: 'Personal Finance',
      image: 'https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRpdmVyc2V8ZW58MXx8fHwxNzYxODEzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Year-End Tax Checklist for Businesses',
      excerpt: 'Prepare your business for year-end with our comprehensive tax checklist to ensure nothing is overlooked.',
      date: 'September 15, 2025',
      category: 'Tax Planning',
      image: 'https://images.unsplash.com/photo-1709803857154-d20ee16ff763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc2MTczMTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Tax Planning', 'Bookkeeping', 'Corporate Tax', 'Payroll', 'Personal Finance'];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4">Resources & Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and expert insights on accounting, tax, and financial management.
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? 'bg-[#1a1f5c] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center space-x-1 text-[#1a1f5c]">
                      <Tag className="w-4 h-4" />
                      <span>{article.category}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="flex items-center space-x-2 text-[#1a1f5c] hover:text-[#2a3570]">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Stay Updated</h2>
          <p className="mb-8 text-gray-300">
            Subscribe to our newsletter for the latest insights, tips, and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 outline-none"
            />
            <button className="bg-white text-[#1a1f5c] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Need Expert Advice?</h2>
          <p className="text-gray-600 mb-8">
            Our team of experienced accountants is here to help you navigate complex financial decisions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#1a1f5c] text-white px-8 py-4 rounded-lg hover:bg-[#2a3570] transition-colors shadow-md hover:shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

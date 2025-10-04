"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, MapPin, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const philosophers = {
  plato: {
    name: "Plato",
    fullName: "Plato (427-347 TCN)",
    era: "Cổ đại",
    nationality: "Hy Lạp",
    image: "/api/placeholder/300/400",
    quote: "Linh hồn con người là bất biến. Giới tính chỉ là vỏ bọc tạm thời.",
    summary:
      'Plato là triết gia Hy Lạp cổ đại, học trò của Socrates và thầy của Aristotle. Trong tác phẩm "Republic", ông đã đưa ra quan điểm tiến bộ về vai trò của phụ nữ trong xã hội.',
    keyIdeas: [
      "Linh hồn không mang giới tính, bình đẳng về lý trí",
      "Phụ nữ có thể trở thành triết gia như đàn ông",
      "Giới tính chỉ là vỏ bọc tạm thời của linh hồn",
      "Đặt nền móng cho ý tưởng bình đẳng tinh thần",
    ],
    works: ["The Republic", "Phaedrus", "Symposium", "Timaeus"],
    influence:
      "Quan điểm của Plato về linh hồn phi giới đã ảnh hưởng đến tư tưởng bình đẳng trong triết học và tôn giáo sau này.",
    modernRelevance:
      "Trong thời đại hiện tại, quan điểm của Plato về bình đẳng tinh thần vẫn có giá trị trong các cuộc tranh luận về quyền phụ nữ và đa dạng giới tính.",
  },
  aristotle: {
    name: "Aristotle",
    fullName: "Aristotle (384-322 TCN)",
    era: "Cổ đại",
    nationality: "Hy Lạp",
    image: "/api/placeholder/300/400",
    quote: "Nam là hình thức, nữ là vật chất. Đó là trật tự tự nhiên.",
    summary:
      "Aristotle là triết gia Hy Lạp cổ đại, học trò của Plato. Ông đã phát triển hệ thống triết học toàn diện và có ảnh hưởng sâu sắc đến tư tưởng phương Tây.",
    keyIdeas: [
      "Nam giới = lý trí, nữ giới = cảm tính",
      "Phân biệt giới tính theo trật tự tự nhiên",
      "Phụ nữ kém hoàn hảo hơn nam giới",
      "Củng cố hệ thống gia trưởng",
    ],
    works: [
      "Politics",
      "Nicomachean Ethics",
      "Metaphysics",
      "On the Generation of Animals",
    ],
    influence:
      "Quan điểm của Aristotle về giới tính đã ảnh hưởng lâu dài trong xã hội phương Tây, củng cố hệ thống gia trưởng.",
    modernRelevance:
      "Mặc dù bị phê phán, quan điểm của Aristotle vẫn được thảo luận trong các cuộc tranh luận về bản chất giới tính và vai trò xã hội.",
  },
  wollstonecraft: {
    name: "Mary Wollstonecraft",
    fullName: "Mary Wollstonecraft (1759-1797)",
    era: "Khai sáng",
    nationality: "Anh",
    image: "/api/placeholder/300/400",
    quote:
      "Nếu phụ nữ không được học, làm sao họ có thể trở nên lý trí như đàn ông?",
    summary:
      "Mary Wollstonecraft là nhà văn, triết gia và nhà hoạt động nữ quyền người Anh. Bà được coi là một trong những người tiên phong của phong trào nữ quyền hiện đại.",
    keyIdeas: [
      "Phụ nữ cần được giáo dục như nam giới",
      "Phản đối quan điểm phụ nữ chỉ phù hợp với vai trò gia đình",
      "Đòi hỏi quyền bình đẳng trong giáo dục",
      "Tiền đề cho nữ quyền hiện đại",
    ],
    works: [
      "A Vindication of the Rights of Woman (1792)",
      "Thoughts on the Education of Daughters",
      "Mary: A Fiction",
    ],
    influence:
      "Tác phẩm của Wollstonecraft đã mở đường cho phong trào nữ quyền hiện đại và đòi hỏi quyền giáo dục cho phụ nữ.",
    modernRelevance:
      "Quan điểm của Wollstonecraft về giáo dục phụ nữ vẫn có giá trị trong các cuộc tranh luận về bình đẳng giới trong giáo dục.",
  },
  beauvoir: {
    name: "Simone de Beauvoir",
    fullName: "Simone de Beauvoir (1908-1986)",
    era: "Hiện đại",
    nationality: "Pháp",
    image: "/api/placeholder/300/400",
    quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
    summary:
      'Simone de Beauvoir là triết gia hiện sinh người Pháp, tiên phong trong phong trào nữ quyền thế kỷ 20. Tác phẩm "The Second Sex" của bà đã cách mạng hóa cách nhìn về giới tính.',
    keyIdeas: [
      "Giới không phải là định mệnh sinh học",
      "Giới là kết quả của quá trình xã hội hóa",
      'Phụ nữ bị định nghĩa bởi vị trí "khác" so với đàn ông',
      "Giải phóng giới cần bắt đầu từ ý thức tự do",
    ],
    works: [
      "The Second Sex (1949)",
      "The Ethics of Ambiguity",
      "Memoirs of a Dutiful Daughter",
      "The Mandarins",
    ],
    influence:
      "Beauvoir đã đặt nền tảng cho triết học nữ quyền hiện đại và ảnh hưởng sâu sắc đến các nhà tư tưởng sau này.",
    modernRelevance:
      "Quan điểm của Beauvoir về giới như sản phẩm xã hội vẫn là nền tảng quan trọng trong các cuộc tranh luận về bản sắc giới.",
  },
  butler: {
    name: "Judith Butler",
    fullName: "Judith Butler (1956-nay)",
    era: "Đương đại",
    nationality: "Mỹ",
    image: "/api/placeholder/300/400",
    quote: "Giới không phải là cái ta có, mà là cái ta làm mỗi ngày.",
    summary:
      "Judith Butler là triết gia người Mỹ, giáo sư tại UC Berkeley. Bà được biết đến với lý thuyết về performativity và đóng góp quan trọng cho queer theory.",
    keyIdeas: [
      'Giới là "màn trình diễn" (performativity)',
      "Giới có thể lặp lại và thay đổi",
      "Phê phán sự phân chia nhị nguyên nam/nữ",
      "Cơ sở lý luận cho queer theory",
    ],
    works: [
      "Gender Trouble (1990)",
      "Bodies That Matter",
      "Undoing Gender",
      "The Psychic Life of Power",
    ],
    influence:
      "Butler đã cách mạng hóa cách hiểu về giới tính và đóng góp quan trọng cho queer theory và phong trào LGBTQ+.",
    modernRelevance:
      "Lý thuyết performativity của Butler vẫn có ảnh hưởng lớn trong các cuộc tranh luận về đa dạng giới và bản sắc trong thế kỷ 21.",
  },
};

export default function PhilosopherPage() {
  const params = useParams();
  const philosopherName = params.name as string;
  const philosopher =
    philosophers[philosopherName as keyof typeof philosophers];

  if (!philosopher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Không tìm thấy triết gia</h1>
          <Link href="/" className="text-yellow-400 hover:text-yellow-300">
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <main className="pt-16">
        {/* Back Button */}
        <div className="px-10 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-yellow-400 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay về trang chủ
          </Link>
        </div>

        {/* Philosopher Header */}
        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Philosopher Image */}
                <div className="md:col-span-1">
                  <div className="w-full h-80 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-white/50" />
                  </div>
                </div>

                {/* Philosopher Info */}
                <div className="md:col-span-2">
                  <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    {philosopher.fullName}
                  </motion.h1>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{philosopher.era}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{philosopher.nationality}</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-yellow-500/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6"
                  >
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                      <p className="text-white text-lg italic">
                        "{philosopher.quote}"
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-200 text-lg leading-relaxed"
                  >
                    {philosopher.summary}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Ideas */}
        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Quan điểm chính
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {philosopher.keyIdeas.map((idea, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">{idea}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Works and Influence */}
        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Major Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Tác phẩm chính
              </h2>
              <div className="space-y-3">
                {philosopher.works.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-white/5 rounded-lg"
                  >
                    <p className="text-white font-medium">{work}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Influence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Ảnh hưởng</h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                {philosopher.influence}
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                Liên hệ hiện đại
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {philosopher.modernRelevance}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Related Philosophers */}
        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Triết gia liên quan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(philosophers)
                  .filter(([key]) => key !== philosopherName)
                  .map(([key, phil]) => (
                    <Link
                      key={key}
                      href={`/philosopher/${key}`}
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      <h3 className="text-white font-bold mb-2">{phil.name}</h3>
                      <p className="text-gray-300 text-sm">{phil.era}</p>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

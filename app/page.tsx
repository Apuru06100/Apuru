"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const revealElements = document.querySelectorAll(".reveal")
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        if (elementTop < windowHeight - 100) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", revealOnScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-[#F4F7FF] min-h-screen">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "header-scrolled" : ""}`}>
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="#" className="text-xl font-bold text-gray-800 tracking-wider uppercase">
            Apuru
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-10 text-gray-500 font-medium">
              <button onClick={() => scrollToSection("about")} className="hover:text-black transition-colors">
                关于我
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="hover:text-black transition-colors">
                作品集
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-black transition-colors">
                技能
              </button>
              <button onClick={() => scrollToSection("experience")} className="hover:text-black transition-colors">
                经历
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-black transition-colors">
                联系我
              </button>
            </div>
            <Link
              href="https://space.bilibili.com/589140/dynamic"
              target="_blank"
              className="hidden md:block ml-8 text-gray-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.333 3.333H4.667A2.333 2.333 0 0 0 2.333 5.667v10.666c0 1.29 1.043 2.334 2.334 2.334h14.666a2.333 2.333 0 0 0 2.334-2.334V5.667A2.333 2.333 0 0 0 19.333 3.333zM7.5 15.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6.5 4.5h2V3c0-.552-.448-1-1-1s-1 .448-1 1v1.5zm9 0h2V3c0-.552-.448-1-1-1s-1 .448-1 1v1.5z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div id="hero-gradient-bg"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 tracking-widest uppercase">LIU JIN</h1>
          <p className="mt-2 text-2xl md:text-3xl text-gray-700">刘金</p>
          <p className="mt-4 text-lg md:text-xl text-gray-600">音乐制作人 & 作曲家</p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="py-24 text-center reveal">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">关于我</h2>
          <p className="text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            你好，我是刘金 (LIU
            JIN)，一位对声音充满热情的音乐制作人。毕业于日本洗足学園音楽大学（硕士）和中国传媒大学（本科），并曾在东京艺术大学进行深造。师从植松伸夫等业界名家，我专注于游戏、广告及影视配乐，并活跃于商业项目与同人音乐创作领域，曾为《原神》、《最终幻想14》等知名游戏的同人作品进行编曲，致力于创造沉浸式的听觉体验。
          </p>
          <div className="flex flex-wrap justify-center gap-3 items-center max-w-4xl mx-auto">
            <span className="bg-white/60 backdrop-blur-sm border border-gray-200/80 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              作曲 & 编曲
            </span>
            <span className="bg-white/60 backdrop-blur-sm border border-gray-200/80 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              游戏配乐
            </span>
            <span className="bg-white/60 backdrop-blur-sm border border-gray-200/80 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              音效设计
            </span>
            <span className="bg-white/60 backdrop-blur-sm border border-gray-200/80 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              弦乐编写
            </span>
            <span className="bg-accent-color/20 border border-accent-color/50 text-[#6c56b3] py-2 px-4 rounded-full text-sm font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-award"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M8 11.794V16l4-1-4-1-4 1 4 1z" />
              </svg>
              第13届北京国际电子音乐作曲比赛多媒体组一等奖 (2016.10)
            </span>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 reveal">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">作品集</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "原神同人音乐《心海「露珠之歌」》",
                role: "角色：弦乐编写 (65万+播放量)",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb4151052126886c1f6242ab6b025a69cb180d44.jpg%40760w_428h_1c-558j8Qqm9zIPoXX8gxvZR5MlkPJE0z.avif",
                link: "https://www.bilibili.com/video/BV12C5LzuELy/?spm_id_from=333.1391.0.0",
              },
              {
                title: "FF14《假面舞会》重编曲",
                role: "角色：编曲 / 配器 / 音乐制作",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4930e64095e790f7e352303b195ea2fd26399cae.jpg%40672w_378h_1c-8wBojMvIYzoEtcAKEhT4DcPeg1dhyL.avif",
                link: "https://www.bilibili.com/video/BV19j421S7Av/?spm_id_from=333.1387.list.card_archive.click&vd_source=2076237d1dca7bb3692e0216934c15cb",
              },
              {
                title: "FF14《忘却的彼岸》重编曲",
                role: "角色：编曲",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/53c8bf5793602c1aae63c88877b1c1bd7c1527fd.jpg%40672w_378h_1c-Yw8g20kc6jtj6CB7T4n2Mjs9OH2UdZ.avif",
                link: "https://www.bilibili.com/video/BV1j64y1E7Ji/?spm_id_from=333.1387.0.0&vd_source=2076237d1dca7bb3692e0216934c15cb",
              },
              {
                title: "弦乐四重奏《Dream Song》",
                role: "角色：作曲 / 录音监制",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/243d9a8b263be20c671952a597ad0615a3b7f372.jpg%40672w_378h_1c-zdmyN4DhojZUR3Hnjz2HqsIN4kppsY.avif",
                link: "https://www.bilibili.com/video/BV1eM4y127wW/",
              },
              {
                title: "多媒体作品《森溯》",
                role: "角色：音乐制作",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f641c95abdb3454e67faee362f8265d93914a7ea.jpg%40672w_378h_1c_%21web-search-common-cover-rJSyYQfHFcBir9KyieMjEY1PSP1Orl.avif",
                link: "https://www.bilibili.com/video/BV1Js411x7KU/?spm_id_from=333.337.search-card.all.click",
              },
              {
                title: "原创歌曲《绘本宇宙》",
                role: "角色：作曲 / 编曲 / 人声编写",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44b6910a28ff6bc8bba18ea69f201f48878a8347.jpg%40672w_378h_1c-DybOwSaxwh5WPCrskg7E6DY2ENDbNL.avif",
                link: "https://www.bilibili.com/video/BV1sJ411x7DD/?spm_id_from=333.1387.upload.video_card.click",
              },
              {
                title: "Agency：智族GQ",
                role: "角色：音乐制作 / 音效",
                image:
                  "https://sjc.microlink.io/GRggy_I3DumvDrUzKQp6ODZURSazat4jPVENeXOESAI-A1E9r3pDM7PZPCPcwWJAUcmPqmd3hnXp-axsJtndyw.jpeg",
                link: "https://aiir.studio/index.php/2021/04/01/awe/",
              },
              {
                title: "《灵魂潮汐》周年纪念曲",
                role: "角色：编曲 / 配器",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/db106d6dbb80bd4da4d6744ce70ddbf2b5ba9d92.jpg%40760w_428h_1c-4SHL5tWhMP48wdR92WRbK47DfGBdOF.avif",
                link: "https://www.bilibili.com/video/BV1aj421Q7oZ/?spm_id_from=333.1387.list.card_archive.click&vd_source=2076237d1dca7bb3692e0216934c15cb",
              },
            ].map((project, index) => (
              <div key={index} className="project-card rounded-lg overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.role}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="font-semibold text-gray-600 hover:text-black transition-colors"
                  >
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white rounded-lg reveal">
          <h2 className="text-4xl font-semibold text-center mb-16 text-gray-800">专业技能</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { skill: "Cubase (作曲/编曲)", level: "熟练", percentage: 95 },
              { skill: "Sibelius (乐谱制作)", level: "熟练", percentage: 90 },
              { skill: "Pro Tools (录音/混音)", level: "良好", percentage: 80 },
              { skill: "音效设计", level: "经验丰富", percentage: 85 },
              { skill: "日语 (JLPT N2)", level: "商务沟通", percentage: 90 },
            ].map((item, index) => (
              <div key={index}>
                <p className="flex justify-between font-semibold mb-2 text-gray-700">
                  <span>{item.skill}</span>
                  <span>{item.level}</span>
                </p>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-accent-color h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 reveal">
          <h2 className="text-4xl font-semibold text-center mb-16 text-gray-800">教育 & 经历</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-8">
              <div className="timeline-line"></div>
              {[
                {
                  title: "洗足学園音楽大学 - 硕士",
                  period: "2019 - 2021",
                  description:
                    "主修作曲与音乐音响设计，深入研究游戏及影视配乐。师从多位日本业界著名作曲家，包括最终幻想系列作曲家植松伸夫先生。",
                },
                {
                  title: "东京艺术大学 - 研究生",
                  period: "2018 - 2019",
                  description: "专注于音乐音响创造方向的研究，为硕士阶段的学习打下坚实基础。",
                },
                {
                  title: "中国传媒大学 - 本科",
                  period: "2014 - 2018",
                  description:
                    "就读于音乐学（电子音乐制作方向），以专业第一的成绩入学，系统学习了音乐理论与现代制作技术。",
                },
              ].map((item, index) => (
                <div key={index} className="timeline-item relative mb-12">
                  <h4 className="font-semibold text-xl text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.period}</p>
                  <p className="mt-2 text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center reveal">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">与我合作</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            我对新的创作机会充满热情。如果您正在寻找一位专业的音乐人来为您的项目增添光彩，请随时与我联系。
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link
              href="mailto:apuru@foxmail.com"
              className="inline-block bg-accent-color text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-200"
            >
              Email: apuru@foxmail.com
            </Link>
            <Link
              href="https://space.bilibili.com/589140/dynamic"
              target="_blank"
              className="inline-block bg-gray-100 text-gray-700 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg"
            >
              访问 Bilibili
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-gray-400 text-sm">&copy; 2024 LIU JIN. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

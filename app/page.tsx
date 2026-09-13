"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { assets, danceCarousel, danceGallery, featuredProjects, gmixGallery, operaGallery, skillFolders, type MediaItem } from "./portfolio-data";

const W = "/assets/WORK板块";

function pdfVideoPoster(src: string) {
  const filename = src.split("/").pop() || "";
  return `/assets/pdf-video-posters/${filename}.png`;
}

function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("is-visible"), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`reveal ${className}`}>{children}</section>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }

function ArrowFlow({ items, loop = false }: { items: string[]; loop?: boolean }) {
  return <div className={`flow ${loop ? "flow-loop" : ""}`} role="list">{items.map((item, index) => <div className="flow-fragment" key={item} role="listitem"><span className="flow-item">{item}</span>{(index < items.length - 1 || loop) && <span className="flow-arrow" aria-hidden="true">→</span>}</div>)}</div>;
}

function OrganicDanceFlow({ items }: { items: string[] }) {
  return <div className="dance-organic-flow" role="list" aria-label="随机舞蹈参与流程"><svg viewBox="0 0 600 350" preserveAspectRatio="none" aria-hidden="true"><path className="dance-organic-path" d="M40 66 C53 135 124 159 155 106 C181 62 122 52 101 106 C72 181 126 252 186 250 C260 247 282 105 325 105 C389 103 371 279 450 280 C529 281 557 211 531 161 C511 122 483 174 520 186 C565 198 583 116 575 78" /><circle cx="40" cy="66" r="7" /><circle cx="186" cy="250" r="7" /><circle cx="325" cy="105" r="7" /><circle cx="450" cy="280" r="7" /><circle cx="575" cy="78" r="7" /></svg>{items.map((item, index) => <div className={`dance-organic-node dance-organic-node-${index + 1}`} key={item} role="listitem"><strong>{item}</strong></div>)}</div>;
}

function OperationCycle() {
  const items = [
    { label: "趋势洞察", icon: "chart" }, { label: "歌单设计", icon: "music" },
    { label: "场地及人员组织", icon: "people" }, { label: "线下活动", icon: "stage" },
    { label: "现场内容采集", icon: "camera" }, { label: "社交平台传播", icon: "megaphone" },
    { label: "下一场活动引流", icon: "share" },
  ];
  return <div className="operation-cycle-wrap"><div className="operation-cycle" role="list" aria-label="随机舞蹈活动运营闭环"><svg className="operation-cycle-arrows" viewBox="0 0 1100 520" aria-hidden="true"><defs><marker id="cycle-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" /></marker></defs><path d="M342 82 Q425 27 492 45" /><path d="M628 50 Q755 20 842 86" /><path d="M965 157 Q1028 204 1001 238" /><path d="M946 337 Q856 422 790 420" /><path d="M646 451 Q520 487 430 451" /><path d="M268 418 Q151 390 120 322" /><path d="M126 212 Q166 124 218 96" /></svg>{items.map((item, index) => <div className={`operation-cycle-node operation-cycle-node-${index + 1}`} key={item.label} role="listitem"><TimelineIcon name={item.icon} /><strong>{item.label}</strong></div>)}</div></div>;
}

function TimelineIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "music") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M9 18V5l11-2v13" /><path d="M9 9l11-2" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></svg>;
  if (name === "list") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>;
  if (name === "people") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="7" r="3" /><circle cx="5" cy="9" r="2" /><circle cx="19" cy="9" r="2" /><path d="M7 20v-2a5 5 0 0 1 10 0v2M2 19v-1a4 4 0 0 1 5-4M22 19v-1a4 4 0 0 0-5-4" /></svg>;
  if (name === "stage") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M4 4h16v16H4zM4 7c3 0 5 2 5 5s-2 5-5 5M20 7c-3 0-5 2-5 5s2 5 5 5M9 20h6" /></svg>;
  if (name === "megaphone") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 11v2a3 3 0 0 0 3 3h2l8 4V4L8 8H6a3 3 0 0 0-3 3zM8 16l2 5" /><path d="M19 9a4 4 0 0 1 0 6" /></svg>;
  if (name === "mic") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" /></svg>;
  if (name === "share") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4" /></svg>;
  if (name === "camera") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M4 7h4l2-3h4l2 3h4v13H4z" /><circle cx="12" cy="13" r="4" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M5 20V11h3v9M11 20V6h3v14M17 20V3h3v17M3 20h19" /></svg>;
}

function Metrics({ items, light = false }: { items: string[]; light?: boolean }) { return <div className={`metrics ${light ? "metrics-light" : ""}`}>{items.map((item) => <div key={item}>{item}</div>)}</div>; }

function Gallery({ images, onOpen, className = "" }: { images: string[]; onOpen: (item: MediaItem) => void; className?: string }) {
  return <div className={`gallery ${className}`}>{images.map((src, index) => <button className="gallery-item" key={src} onClick={() => onOpen({ src, type: "image", label: `作品图片 ${index + 1}` })} aria-label={`查看作品图片 ${index + 1}`}><img src={src} alt={`作品展示 ${index + 1}`} loading="lazy" /></button>)}</div>;
}

function ProjectHero({ id, index, title, subtitle, info, metrics, image }: { id: string; index: string; title: React.ReactNode; subtitle: React.ReactNode; info: string[]; metrics: string[]; image: string }) {
  return <Reveal id={id} className="project-hero full-bleed"><img className="project-hero-bg" src={image} alt="" /><div className="project-shade" /><div className="project-hero-content page-shell"><Eyebrow>WORK · {index}</Eyebrow><h2>{title}</h2><p className="project-lead">{subtitle}</p><div className="project-info">{info.map((item) => <span key={item}>{item}</span>)}</div><Metrics items={metrics} light /></div></Reveal>;
}

function Modal({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const handler = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handler); document.body.classList.add("modal-open");
    return () => { window.removeEventListener("keydown", handler); document.body.classList.remove("modal-open"); };
  }, [item, onClose]);
  if (!item) return null;
  return <div className="modal" role="dialog" aria-modal="true" aria-label={item.label} onMouseDown={(event) => event.target === event.currentTarget && onClose()}><button className="modal-close" onClick={onClose} aria-label="关闭预览">×</button>{item.type === "video" ? <video src={item.src} controls autoPlay playsInline /> : <img src={item.src} alt={item.label} />}</div>;
}

function SimpleCarousel({ images, onOpen, pdfMode = false }: { images: string[]; onOpen: (item: MediaItem) => void; pdfMode?: boolean }) {
  const [index, setIndex] = useState(0); const [paused, setPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);
  useEffect(() => { if (paused) return; const timer = window.setInterval(() => setIndex((value) => (value + 1) % images.length), 3000); return () => window.clearInterval(timer); }, [images.length, paused]);
  const move = (step: number) => setIndex((value) => (value + step + images.length) % images.length);
  if (pdfMode) return <div className="pdf-media-grid pdf-dance-grid">{images.map((image, imageIndex) => <figure key={image}><img src={image} alt={`随机舞蹈活动图片 ${imageIndex + 1}`} /></figure>)}</div>;
  return <div className="simple-carousel stacked-dance-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onPointerDown={(event) => { pointerStart.current = event.clientX; setPaused(true); }} onPointerUp={(event) => { if (pointerStart.current === null) return; const distance = event.clientX - pointerStart.current; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); pointerStart.current = null; setPaused(false); }}>{images.map((image, imageIndex) => { const delta = (imageIndex - index + images.length) % images.length; const position = delta === 0 ? "center" : delta === 1 ? "next" : delta === images.length - 1 ? "prev" : "hidden"; return <button className={`dance-stack-item ${position}`} key={image} onClick={() => position === "center" ? onOpen({ src: image, type: "image", label: `活动图片 ${imageIndex + 1}` }) : setIndex(imageIndex)} aria-label={position === "center" ? `查看随机舞蹈活动图片 ${imageIndex + 1}` : `切换至随机舞蹈活动图片 ${imageIndex + 1}`} aria-hidden={position === "hidden"} tabIndex={position === "hidden" ? -1 : 0}><img src={image} alt={`随机舞蹈活动图片 ${imageIndex + 1}`} /><span>{String(imageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></button>; })}<div className="dance-carousel-dots" aria-hidden="true">{images.map((_, dot) => <i className={dot === index ? "active" : ""} key={dot} />)}</div></div>;
}

function SkillShowcase({ onOpen, pdfMode = false }: { onOpen: (item: MediaItem) => void; pdfMode?: boolean }) {
  const [active, setActive] = useState<string | null>(null); const [index, setIndex] = useState(0);
  const folder = useMemo(() => skillFolders.find((item) => item.key === active), [active]);
  useEffect(() => { setIndex(0); }, [active]);
  useEffect(() => { if (!folder) return; const timer = window.setInterval(() => setIndex((value) => (value + 1) % folder.media.length), 2000); return () => window.clearInterval(timer); }, [folder]);
  const move = (step: number) => folder && setIndex((index + step + folder.media.length) % folder.media.length);
  if (pdfMode) return <div className="pdf-skill-showcase">{skillFolders.map((item) => <section className="pdf-skill-folder" key={item.key}><div className="pdf-skill-heading"><img src={item.image} alt="" /><div><Eyebrow>{item.category || "PORTFOLIO"}</Eyebrow><h3>{item.title}</h3><p>{item.tags}</p></div></div><div className="pdf-media-grid">{item.media.map((media) => <figure key={media.src}>{media.type === "video" ? <img className="pdf-video-cover" src={pdfVideoPoster(media.src)} alt="" loading="eager" /> : <img src={media.src} alt="" loading="eager" />}</figure>)}</div></section>)}</div>;
  return <>
    <div className="skill-folders">
      {skillFolders.map((item) => <button key={item.key} className={`skill-folder ${active === item.key ? "active" : ""}`} onClick={() => setActive(active === item.key ? null : item.key)} aria-expanded={active === item.key}><img src={item.image} alt={`${item.title} 文件夹`} /></button>)}
    </div>
    <div className={`skill-window ${folder ? "open" : ""}`} aria-live="polite">
      {folder && <>
        <div className="skill-window-head"><div><Eyebrow>{folder.category || "PORTFOLIO"}</Eyebrow><h3>{folder.title}</h3></div><p>{folder.tags}</p></div>
        <div className="stack-carousel">
          <button className="carousel-arrow left" onClick={() => move(-1)} aria-label="上一个作品">‹</button>
          {folder.media.map((media, mediaIndex) => { const delta = (mediaIndex - index + folder.media.length) % folder.media.length; const position = delta === 0 ? "center" : delta === 1 ? "next" : delta === folder.media.length - 1 ? "prev" : "hidden"; return <button className={`stack-item ${position}`} key={media.src} onClick={() => position === "center" ? onOpen(media) : setIndex(mediaIndex)} aria-label={position === "center" ? "打开作品预览" : "切换作品"} aria-hidden={position === "hidden"} tabIndex={position === "hidden" ? -1 : 0}>{media.type === "video" ? <video src={media.src} muted preload="metadata" playsInline /> : <img src={media.src} alt={media.label} loading="lazy" />}</button>; })}
          <button className="carousel-arrow right" onClick={() => move(1)} aria-label="下一个作品">›</button>
        </div>
        <div className="carousel-dots" aria-hidden="true">{folder.media.map((_, dot) => <i className={dot === index ? "active" : ""} key={dot} />)}</div>
      </>}
    </div>
  </>;
}

function FlipCard({ title, desc, image, index }: { title: string; desc: string; image: string; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return <button className={`flip-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)} aria-pressed={flipped}><span className="flip-inner"><span className="flip-front"><small>0{index + 1}</small><strong>{title}</strong><em>{desc}</em><i>CLICK TO VIEW ↗</i></span><span className="flip-back"><img src={image} alt={`${title}现场证据`} /></span></span></button>;
}

export default function Home() {
  const [entered, setEntered] = useState(false); const [pdfMode, setPdfMode] = useState(false); const [menuOpen, setMenuOpen] = useState(false); const [resumeOpen, setResumeOpen] = useState(false); const [activeNav, setActiveNav] = useState("me"); const [modal, setModal] = useState<MediaItem | null>(null);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("pdf") === "1") { setPdfMode(true); setEntered(true); document.documentElement.classList.add("pdf-document"); } }, []);
  useEffect(() => { const sections = ["me", "work", "skill", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]; const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveNav(entry.target.id)), { rootMargin: "-35% 0px -55%", threshold: 0 }); sections.forEach((section) => observer.observe(section)); return () => observer.disconnect(); }, [entered]);
  const jump = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return <main style={{ "--site-bg": `url("${assets.background}")` } as React.CSSProperties}>
    {!entered && <div className="intro-screen"><p className="intro-kicker">KIMEN · PORTFOLIO</p><button className="intro-folder" onClick={() => setEntered(true)} aria-label="打开作品集"><img src={assets.introFolder} alt="Kimen Portfolio 文件夹" /></button><p className="intro-hint">点击文件夹进入</p></div>}
    <div className={`site ${entered ? "site-entered" : ""} ${pdfMode ? "pdf-mode" : ""}`} aria-hidden={!entered}>
      <header className="topbar"><button className="brand" onClick={() => jump("me")} aria-label="返回首页"><img src={assets.navFlower} alt="" /></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU</button><nav className={menuOpen ? "open" : ""} aria-label="主导航">{["ME", "WORK", "SKILL", "CONTACT"].map((item) => <button key={item} className={activeNav === item.toLowerCase() ? "active" : ""} onClick={() => jump(item.toLowerCase())}>{item}</button>)}</nav></header>

      <Reveal id="me" className="hero page-shell screen"><div className="hero-copy"><Eyebrow>ME · 01</Eyebrow><h1>浦婧崟</h1><p className="hero-role">Event &amp; Brand Marketing</p><p className="hero-line">从用户洞察到现场落地，<br />用内容与体验推动参与和传播。</p><div className="hero-actions"><button className="primary-button" onClick={() => jump("featured-projects")}>查看精选项目 <span>↗</span></button><div className="resume-menu"><button className="secondary-button" onClick={() => setResumeOpen(!resumeOpen)} aria-expanded={resumeOpen}>下载简历 <span>⌄</span></button>{resumeOpen && <div className="resume-options"><a href={assets.resumeEvent} download>活动策划执行版</a><a href={assets.resumeMarketing} download>品牌营销版</a></div>}</div></div></div><div className="portrait-frame"><img src={assets.portrait} alt="浦婧崟个人照片" /></div></Reveal>

      <Reveal id="featured" className="page-shell screen featured-section"><div className="section-heading"><div><Eyebrow>ME · 02</Eyebrow><h2>把想法落到现场，<br />也让现场继续传播。</h2></div><p>Selected capabilities &amp; work</p></div><div className="capability-grid">{[["活动策划", "主题构思、方案撰写、流程设计", "累计参与线上线下活动 20+场"], ["项目执行", "资源协调、物料统筹、现场推进", "协同 80 名演员及 30+名工作人员"], ["内容传播", "传播规划、脚本撰写、视觉内容", "代表项目累计播放量 10 万+"], ["用户运营", "社群触达、互动机制、数据复盘", "直播有效到场率约 38%→76%"]].map(([title, desc, proof], index) => <article className="capability-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p><small>{proof}</small></article>)}</div><div id="featured-projects" className="featured-grid">{featuredProjects.map((project, index) => <button className="featured-card" onClick={() => jump(project.id)} key={project.id}><img src={project.image} alt="" /><span className="featured-overlay" /><span className="featured-number">0{index + 1}</span><span className="featured-content"><small>{project.role}</small><strong>{project.title}</strong><em>{project.summary}</em><b>{project.metrics}</b></span></button>)}</div></Reveal>

      <div id="work" className="work-anchor" />
      <ProjectHero id="gmix" index="01" title={<><span className="project-title-line">GMIX年度</span><span className="project-title-line">大型舞蹈专场</span></>} subtitle="从内容共创到现场落地，重新设计校园舞蹈专场的参与及传播体验。" info={["时间：2025.03—2025.06", "角色：总策划／现场执行", "团队：80 名演员及 30+名工作人员", "标签：活动策划/项目管理/活动营销"]} metrics={["节目报名 58→124 人", "现场观众 120→200 人", "累计播放量 10 万+"]} image={`${W}/GMIX年度大型舞蹈专场全案策划/第一屏/封面背景底图.jpg`} />
      <Reveal className="page-shell screen split-section"><div><Eyebrow>GMIX · BACKGROUND</Eyebrow><h2>不只是完成一场演出，<br />重新激活社员参与才是重点。</h2><ul className="statement-list"><li>往届活动中，部分社员缺少内容参与和表达入口；</li><li>节目及现场呈现需要进一步贴近年轻观众偏好；</li><li>活动传播集中于前期通知，现场内容价值未充分延续。</li></ul></div><div className="audience-grid"><article className="audience-card"><span>01 / CORE</span><h3>核心参与者：舞社社员</h3><h4>需求</h4><p>获得上台和展示机会<br />表演自己真正喜欢的内容<br />获得社团归属感<br />留下高质量影像记录</p><h4>障碍</h4><p>节目参与门槛<br />排练时间冲突<br />对节目或活动缺少参与感</p></article><article className="audience-card mint"><span>02 / AUDIENCE</span><h3>外部观众：校内外学生</h3><h4>需求</h4><p>有吸引力的舞台内容<br />熟悉或热门的音乐<br />有氛围感的现场体验<br />可以拍摄和分享的内容</p><h4>障碍</h4><p>对舞社不了解<br />活动信息触达不足<br />演出与普通文艺活动缺乏差异</p></article></div></Reveal>
      <Reveal className="page-shell screen strategy-section"><Eyebrow>GMIX · STRATEGY</Eyebrow><h2>内容共创＋体验升级＋社交传播</h2><p className="section-note">点击卡片查看现场证据</p><div className="flip-grid">{[["内容共创", "通过歌曲征集、节目筛选和热点结合，提高社员对活动内容的参与感。", `${W}/GMIX年度大型舞蹈专场全案策划/第三屏/内容共创策略卡背面图片.jpeg`], ["体验升级", "统筹舞美、物料、流程和现场管理，提升表演者及观众体验。", `${W}/GMIX年度大型舞蹈专场全案策划/第三屏/体验升级策略卡背面图片.JPG`], ["社交传播", "升级前期预热、现场影像及活动后内容，让演出在结束后继续传播。", `${W}/GMIX年度大型舞蹈专场全案策划/第三屏/社交传播策略卡背面图片.JPG`]].map(([title, desc, image], index) => <FlipCard key={title} title={title} desc={desc} image={image} index={index} />)}</div></Reveal>
      <Reveal className="page-shell screen timeline-section"><Eyebrow>GMIX · EXECUTION</Eyebrow><h2>如何把 100+人的活动按节点落地？</h2><div className="event-timeline" role="list">{[["歌曲征集", "music"], ["节目筛选", "list"], ["人员组织", "people"], ["场地舞美", "stage"], ["宣传预热", "megaphone"], ["彩排演出", "mic"], ["内容传播", "share"], ["活动复盘", "chart"]].map(([label, icon], index) => <div className={`event-node ${[2, 3, 6].includes(index) ? "event-node-highlight" : ""}`} key={label} role="listitem"><div className="event-node-row"><span className="event-node-icon"><TimelineIcon name={icon} /></span>{index < 7 && <span className="event-arrow" aria-hidden="true" />}</div><strong>{label}</strong></div>)}</div><div className="timeline-evidence">{[["人员组织", "节目及人员统筹", "人员组织节点卡片图片.jpeg", "89%"], ["场地舞美", "舞美、物料与现场流程", "场地舞美节点卡片图片.png", "28%"], ["内容传播", "前中后期传播安排", "内容传播节点卡片图片.jpeg", "55%"]].map(([title, desc, file, stem]) => <article className="timeline-evidence-card" style={{ "--stem-x": stem } as React.CSSProperties} key={title}><span className="evidence-stem" aria-hidden="true" /><img src={`${W}/GMIX年度大型舞蹈专场全案策划/第四屏/${file}`} alt={title} /><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></Reveal>
      <Reveal className="page-shell gallery-section"><div className="section-heading"><div><Eyebrow>GMIX · ON SITE</Eyebrow><h2>现场呈现</h2></div><p>视觉、舞台与传播内容共同构成体验。</p></div><Gallery images={gmixGallery} onOpen={setModal} className="gmix-gallery" /></Reveal>
      <Reveal className="result-screen full-bleed"><img src={`${W}/GMIX年度大型舞蹈专场全案策划/第七屏/背景底图.JPG`} alt="" /><div className="result-shade" /><div className="page-shell result-content"><Eyebrow>GMIX · RESULT</Eyebrow><h2>从参与，到传播。</h2><Metrics items={["节目报名人数由约 58 人增至 124 人", "现场观众由约 120 人增至约 200 人", "全平台累计获得 10 万+自然播放量"]} light /><div className="secondary-metrics">回收 83 份有效问卷｜94% 选择“满意/非常满意”｜周期内新增社员 97 人</div><small>数据来源为社团内部复盘整理统计结果。</small></div></Reveal>
      <Reveal className="page-shell screen reflection"><Eyebrow>GMIX · REFLECTION</Eyebrow><h2>这次项目让我学会了…</h2><div className="reflection-list"><p><span>01</span>内容共创能够提升参与者对活动的归属感；</p><p><span>02</span>现场体验和传播内容需要在策划阶段同步设计；</p><p><span>03</span>大规模活动需要更标准化的节点、分工和风险管理。</p></div><small>若有重新执行的机会，我会提前建立统一项目看板，并将传播所需镜头纳入现场拍摄清单。</small></Reveal>

      <ProjectHero id="livestream" index="02" title={<><span className="project-title-line">海外院校</span><span className="project-title-line">新生主题直播</span></>} subtitle={<>通过精准触达和持续互动机制，<br />提升新生直播的到场及停留表现。</>} info={["时间：2026.03—2026.05", "角色：活动策划／直播执行／用户运营", "场次：10+场", "标签：Live Streaming／User Operation／Event Marketing"]} metrics={["有效到场 37→78 人", "有效到场率约 38%→76%", "人均观看 24→56 分钟"]} image={`${W}/海外院校新生主题系列直播/第一屏/背景底图.JPG`} />
      <Reveal className="page-shell screen insight-section"><Eyebrow>LIVE STREAM · INSIGHT</Eyebrow><h2>问题洞察：用户报名后，<br />为什么没有持续留在直播间？</h2><ArrowFlow items={["社群触达", "活动报名", "进入直播", "持续观看", "互动反馈"]} /><div className="problem-grid"><p><span>流失点 01</span>报名与实际到场之间存在流失；</p><p><span>流失点 02</span>单点抽奖只能产生短期刺激，用户可能中途离开。</p></div><blockquote>新生需要实用信息，但面对长内容直播仍需要持续的参与反馈和阶段性激励。</blockquote></Reveal>
      <Reveal className="page-shell screen mechanism-section"><div className="stream-strategy"><Eyebrow>LIVE STREAM · STRATEGY</Eyebrow><h2><span>将“一次抽奖”改造成</span><br />“持续参与任务”</h2><div className="stage-flow" role="list">{["内容观看", "完成问答", "收集奖品碎片", "继续观看", "完成下一轮任务", "获得最终奖励"].map((item, index) => <div className="stage-step" key={item} role="listitem"><span>0{index + 1}</span><strong>{item}</strong>{index !== 2 && index !== 5 && <i aria-hidden="true" />}</div>)}</div></div><div className="work-column"><aside className="work-card"><div className="work-card-head"><span>MY ROLE</span><h3>我的工作</h3></div><ul><li>方案撰写与内容流程设计</li><li>嘉宾对接与直播间搭建</li><li>设计“奖品碎片收集+内容问答”机制</li><li>跟踪到场、观看及互动数据并复盘</li></ul></aside><button className="work-proof" onClick={() => setModal({ src: `${W}/海外院校新生主题系列直播/第三屏/直播内容问答及直播间用户互动图片.JPG`, type: "image", label: "直播内容问答及直播间用户互动" })} aria-label="打开图片预览"><img src={`${W}/海外院校新生主题系列直播/第三屏/直播内容问答及直播间用户互动图片.JPG`} alt="直播内容问答及直播间用户互动" /></button></div></Reveal>
      <Reveal className="page-shell screen iteration-section"><div><Eyebrow>LIVE STREAM · EXECUTION</Eyebrow><h2>执行流程</h2><ol className="vertical-process">{["社群推广", "报名提醒", "嘉宾沟通", "直播间搭建", "现场执行", "数据复盘"].map((item, i) => <li key={item}><span>0{i + 1}</span><strong>{item}</strong></li>)}</ol></div><div className="loop-card"><span className="loop-center">可复用</span><div className="loop-orbit">{["报名及观看数据", "识别流失节点", "调整互动方式", "应用于后续场次"].map((item, i) => <p className={`loop-item loop-${i + 1}`} key={item}>{item}</p>)}{[1, 2, 3, 4].map((item) => <i className={`loop-arrow loop-arrow-${item}`} key={item} aria-hidden="true">➜</i>)}</div></div></Reveal>
      <Reveal className="page-shell screen outcome-section"><Eyebrow>LIVE STREAM · RESULT</Eyebrow><h2>结果与复盘</h2><Metrics items={["场均有效到场人数由 37 人提升至 78 人", "有效到场率由约 38% 提升至约 76%", "人均观看时长由 24 分钟提升至 56 分钟", "单场视频号预约 100+人次，累计观看人次最高 1000+"]} /><small>*因具体数据涉及公司商业隐私，展示数据仅为脱敏后统计数据。</small><div className="review-grid"><p>连续任务比单点奖励更适合长内容直播；</p><p>社群触达、内容质量和互动机制需要共同作用，不能将结果全部归因于抽奖设计。</p></div></Reveal>

      <ProjectHero id="random-dance" index="03" title="随机舞蹈系列活动" subtitle={<>用低门槛舞蹈参与和短视频传播，<br />将单次活动发展为常态化系列。</>} info={["角色：策划／执行／内容传播", "场次：累计 13 场，主导 7 场", "标签：Event Planning／Community Operation／Social Media"]} metrics={["场均 90—100 人", "较 60 人目标高出 50%+", "系列播放量 5 万+"]} image={`${W}/随机舞蹈系列活动/第一屏/背景底图.jpg`} />
      <Reveal className="page-shell screen dance-mode"><div className="section-heading"><div><Eyebrow>RANDOM DANCE · MODE</Eyebrow><h2>从“看演出”到“随时加入”。</h2></div></div><div className="two-column"><ul className="statement-list"><li>想跳舞，但不一定愿意正式加入舞社；</li><li>希望低门槛参与；</li><li>希望通过兴趣认识同伴；</li><li>对热门歌曲和舞蹈内容响应较高。</li></ul><OrganicDanceFlow items={["热门歌单吸引", "围观", "随时加入", "现场互动", "内容分享"]} /></div><SimpleCarousel images={danceCarousel} onOpen={setModal} pdfMode={pdfMode} /></Reveal>
      <Reveal className="page-shell screen chain-section"><Eyebrow>RANDOM DANCE · OPERATION</Eyebrow><h2>一场活动结束，<br />也是下一场活动的开始。</h2><OperationCycle /><div className="duties"><span>具体职责</span>{["歌单及活动内容", "场地和商场资源对接", "参与人员组织", "现场管理", "影像素材沉淀", "后续内容传播"].map((item) => <p key={item}>{item}</p>)}</div></Reveal>
      <Reveal className="page-shell gallery-section"><div className="section-heading"><div><Eyebrow>RANDOM DANCE · VISUAL</Eyebrow><h2>现场视觉</h2></div><p>开放式活动结构让围观者可以在熟悉歌曲出现时随时转化为参与者。</p></div><Gallery images={danceGallery} onOpen={setModal} className="dance-gallery" /></Reveal>
      <Reveal className="result-screen full-bleed"><img src={`${W}/随机舞蹈系列活动/第五屏/背景底图.JPG`} alt="" /><div className="result-shade" /><div className="page-shell result-content"><Eyebrow>RANDOM DANCE · RESULT</Eyebrow><h2>成果与复盘</h2><Metrics light items={["累计落地 13 场，其中主导策划及执行 7 场", "历史数据设定单场 60 人目标，实际场均 90—100 人", "单场峰值约 120 人", "系列视频累计播放量 5 万+"]} /><p className="result-review">项目成功形成了“线下参与—内容传播—后续引流”的基础循环；首次参与、重复参与及社群转化数据仍需进一步记录与优化。</p></div></Reveal>

      <ProjectHero id="three-paths" index="04" title={<><span className="project-title-line">“三道贯通”工程进展</span><span className="project-title-line">持续报道</span></>} subtitle="从市民实际体验切入，将工程信息转化为更易理解的民生内容。" info={["选题调研", "采访拍摄", "视频制作"]} metrics={["成片获采用", "互动量较同期视频提升约 80%"]} image={`${W}/“三道贯通”工程报道/第一屏/背景底图.JPG`} />
      <Reveal className="page-shell screen editorial-section"><Eyebrow>REPORT · CONTENT STRATEGY</Eyebrow><div className="contrast-grid"><article><span>传播问题</span><h3>工程类报道容易停留在建设进展，公众难以感知与自身生活的关系。</h3></article><article className="mint"><span>内容策略</span><h3>从“工程建设了什么”转向“市民能够怎样使用”。</h3></article></div><div className="execution-row"><div className="execution-copy"><h3>执行内容</h3><div className="execution-tags">{["前期资料调研", "现场采访与拍摄", "从市民体验提炼内容角度", "后期剪辑与包装"].map((item) => <span key={item}>{item}</span>)}</div></div><ArrowFlow items={["原有使用痛点", "工程进展", "市民实际体验", "公共空间价值"]} /></div></Reveal>
      <Reveal className="page-shell screen video-result"><div><Eyebrow>REPORT · FILM &amp; RESULT</Eyebrow><h2>成片与结果</h2>{pdfMode ? <img className="pdf-film-cover" src="/assets/pdf-video-posters/成片预览.mov.png" alt="" /> : <video src={`${W}/“三道贯通”工程报道/第三屏/成片预览.mov`} controls preload="metadata" playsInline />}</div><div className="result-copy"><button onClick={() => setModal({ src: `${W}/“三道贯通”工程报道/第三屏/数据对比截图.jpeg`, type: "image", label: "同期报道数据对比截图" })}><img src={`${W}/“三道贯通”工程报道/第三屏/数据对比截图.jpeg`} alt="同期报道数据对比截图" /></button><h3>成片获平台采用发布，互动量较同期视频提升约 80%。</h3><p>民生传播不仅需要说明事实，还要让用户快速理解“这件事与我有什么关系”。</p></div></Reveal>

      <ProjectHero id="opera" index="05" title={<><span className="project-title-line">第 29 届“中国少儿戏曲</span><span className="project-title-line">小梅花荟萃”江苏选拔赛</span></>} subtitle="在多场次、多角色参与的密集环境中，协调候场、人员及现场流程。" info={["角色：活动统筹／现场执行／传播支持", "时间：2025.04—2025.05", "规模：2 天 5 场", "团队：约 30 名工作人员", "服务：200—300 人次演员、家长及教师"]} metrics={[]} image={`${W}/“小梅花”少儿戏曲选拔赛/第一屏/背景底图.jpg`} />
      <Reveal className="page-shell opera-execution"><Eyebrow>OPERA · EXECUTION</Eyebrow><h2>执行挑战与我的工作</h2><div className="opera-grid"><article className="opera-panel opera-challenge"><h3>挑战</h3><ul className="opera-box-list"><li>5 场展演连续推进；</li><li>演员、家长和教师人数较多；</li><li>导演、后勤、安保等团队需要同步协作。</li></ul><ArrowFlow items={["签到", "候场", "节目确认", "舞台催场", "登台", "退场衔接"]} /></article><article className="opera-panel opera-work"><h3>我的工作</h3><ul className="opera-box-list"><li>协助制定人员调度表</li><li>舞台催场</li><li>候场区秩序维护</li><li>流程进度跟进</li><li>多团队现场对接</li><li>延误及人员调度处理</li></ul></article></div><Gallery images={operaGallery} onOpen={setModal} className="opera-gallery" /></Reveal>
      <Reveal className="page-shell screen outcome-section"><Eyebrow>OPERA · RESULT</Eyebrow><h2>成果与能力沉淀</h2><Metrics items={["2 天完成 5 场展演", "服务 200—300 人次参与者", "5 场活动顺利推进", "产出 3 组核心视觉素材并用于多平台宣传"]} /><div className="skill-tags"><span>多角色沟通</span><span>密集流程管理</span><span>候场及现场秩序</span><span>突发情况协调</span></div></Reveal>

      <Reveal id="skill" className="page-shell skill-section"><div className="section-heading"><div><Eyebrow>SKILL</Eyebrow><h2>{pdfMode ? <>作品与创作能力</> : <>打开文件夹，<br />看看我如何创作。</>}</h2></div><p>Content · Photography · Editing · Design</p></div><SkillShowcase onOpen={setModal} pdfMode={pdfMode} /></Reveal>
      <Reveal id="contact" className="contact-section full-bleed"><div className="page-shell"><Eyebrow>CONTACT</Eyebrow><h2>感谢观看</h2><div className="contact-links"><a href="tel:13771566035">电话：13771566035</a><a href="mailto:jingyin1014@gmail.com">邮箱：jingyin1014@gmail.com</a><span>微信：jyinnnnn</span></div><a className="portfolio-download" href={assets.portfolioPdf} download="浦婧崟作品集.pdf">下载 PDF 版作品集</a><footer><p>Thank you for your trust.</p><p>Design by Kimen</p></footer></div></Reveal>
    </div><Modal item={modal} onClose={() => setModal(null)} />
  </main>;
}

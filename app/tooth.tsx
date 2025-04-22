"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

import { cn } from "#utils/classnames";

import { Header } from "#components/layout/header";

import { SlideTitle } from "./slide-title";
import styles from "./styles.module.css";

import captions from "#assets/tooth/captions.png";
import toothState1 from "#assets/tooth/tooth_state_1.png";
import toothState2 from "#assets/tooth/tooth_state_2.png";
import toothState3 from "#assets/tooth/tooth_state_3.png";
import toothState4 from "#assets/tooth/tooth_state_4.png";
import toothState5 from "#assets/tooth/tooth_state_5.png";

const toothBaseClassNames =
  "pointer-events-none absolute left-1/2 -translate-x-1/2 transform will-change-transform";
const slideContentRightClassNames =
  "pointer-events-none fixed inset-0 flex flex-col justify-center opacity-0";

export const Tooth = () => {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const bgVideoRef = useRef(null);
  const bgVideoContentRef = useRef(null);
  const captionsRef = useRef(null);
  const animationContainerRef = useRef(null);
  const tooth1Ref = useRef(null);
  const tooth2Ref = useRef(null);
  const tooth3Ref = useRef(null);
  const tooth4Ref = useRef(null);
  const tooth5Ref = useRef(null);
  const slideContentRef1 = useRef(null);
  const slideContentRef2 = useRef(null);
  const slideContentRef3 = useRef(null);
  const masterTimelineRef = useRef(null);

  useEffect(() => {
    if (!animationContainerRef.current) return;

    // Create master timeline
    const masterTimeline = gsap.timeline({ paused: true });
    (masterTimelineRef as any).current = masterTimeline;

    const elements = [
      headerRef.current,
      bgVideoRef.current,
      bgVideoContentRef.current,
      tooth1Ref.current,
      tooth2Ref.current,
      tooth3Ref.current,
      tooth4Ref.current,
      tooth5Ref.current,
      captionsRef.current,
      slideContentRef1.current,
      slideContentRef2.current,
      slideContentRef3.current,
    ];
    if (elements.some((el) => !el)) {
      console.error("Some refs are not initialized:", elements);
      return;
    }

    masterTimeline.set(slideContentRef1.current, { yPercent: 100 });
    masterTimeline.set(slideContentRef2.current, { yPercent: 100 });
    masterTimeline.set(slideContentRef3.current, { yPercent: 100 });


    masterTimeline
      .to([bgVideoRef.current, bgVideoContentRef.current], {
        duration: 0,
      })
      .to(tooth1Ref.current, {
        scale: 1.49,
        duration: 3.5,
        ease: "power3.inOut",
      })
      .to(
        [tooth2Ref.current],
        { opacity: 1, scale: 1.4875, duration: 3.5, ease: "power3.inOut" },
        "<"
      )
      .to([bgVideoRef.current, bgVideoContentRef.current], { opacity: 0, duration: 3.5 }, "<")
      .to({}, { duration: 0.8 })
      .to([headerRef.current, tooth1Ref.current], {
        opacity: 0,
        duration: 3.5,
        ease: "power2.inOut",
      })
      .to(
        [tooth3Ref.current, tooth4Ref.current, tooth5Ref.current],
        { scale: 1.4875, duration: 3.5, ease: "power3.inOut" },
        "<"
      )
      .to(captionsRef.current, {
        opacity: 1,
        duration: 3,
        ease: "power3.inOut",
      })
      .to({}, { duration: 1 })
      // 1. Move tooth left
      .to([tooth2Ref.current, tooth3Ref.current, tooth4Ref.current, tooth5Ref.current], {
        x: "-50vh",
        duration: 3.5,
        ease: "power3.inOut",
      })
      .to(captionsRef.current, { opacity: 0, duration: 2.5 }, "<")
      // 2. Show video with healthy tooth
      .to(slideContentRef1.current, {
        yPercent: 0,
        opacity: 1,
        duration: 4.5,
        ease: "power3.inOut",
      }, "<")
      // Pause to view video
      .to({}, { duration: 3 })
      // 3. Show caries while video is still visible
      .to(tooth2Ref.current, { opacity: 0, duration: 3 })
      .to(tooth3Ref.current, { opacity: 1, duration: 3 }, "<")
      // Another pause with both video and caries visible
      .to({}, { duration: 3 })
      // 4. Hide video
      .to(slideContentRef1.current, {
        yPercent: -100,
        opacity: 0,
        duration: 4.5,
        ease: "power2.out",
      })
      // 5. Move tooth with caries to the right
      // .to({}, { duration: 1.5 })
      .to(
        [tooth3Ref.current, tooth4Ref.current, tooth5Ref.current],
        {
          x: "30vw",
          y: "-65vh",
          scale: 0.65,
          duration: 3.5,
          ease: "power3.inOut",
        },
        "<"
      )
      // .to({}, { duration: 1 })
      // Rest of timeline remains the same
      .to(slideContentRef2.current, {
        yPercent: 0,
        opacity: 1,
        duration: 4.5,
        ease: "power2.out",
      }, "<")
      .to({}, { duration: 3 })
      .to(tooth3Ref.current, { opacity: 0, duration: 3 })
      .to(tooth4Ref.current, { opacity: 1, duration: 3 }, "<")
      .to({}, { duration: 2 })
      .to(slideContentRef2.current, { yPercent: -100, opacity: 0, duration: 4 })
      .to(
        [tooth4Ref.current, tooth5Ref.current],
        {
          x: "-42vw",
          y: "-120vh",
          scale: 1.2,
          duration: 3.5,
          ease: "power3.inOut",
        },
        "<"
      )
      // .to({}, { duration: 1 })
      .to(slideContentRef3.current, {
        yPercent: 0,
        opacity: 1,
        duration: 4.5,
        ease: "power2.out",
      }, "<")
      .to({}, { duration: 3 })
      .to(tooth4Ref.current, { opacity: 0, duration: 3 })
      .to(tooth5Ref.current, { opacity: 1, duration: 3 }, "<")
      .to({}, { duration: 2 })
      .to("#mainContent", { opacity: 1, duration: 3, ease: "power2.inOut" })
      .to(slideContentRef3.current, {
        yPercent: -100,
        opacity: 0,
        duration: 4,
        ease: "power2.inOut",
      })
      .to(
        [tooth4Ref.current, tooth5Ref.current],
        {
          x: "-42vw",
          yPercent: -100,
          scale: 1.2,
          duration: 3.5,
          opacity: 0,
          ease: "power3.inOut",
        },
        "<"
      );

    const scrollHandler = () => {
      // Calculate progress based on scroll position
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollPosition / totalHeight, 1);


      // Update timeline progress
      masterTimeline.progress(scrollProgress);
    };

    // Enable normal scrolling
    document.body.style.overflow = "";

    // Add scroll listener
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      masterTimeline.kill();
    };
  }, []);

  return (
    <div className="h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={bgVideoRef}>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/main_background_diagnocat.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative mx-auto max-w-[1440px]">
          <div className="relative z-10 text-center">
            <div className="bg-white" ref={headerRef}>
              <Header className="container" />
            </div>
            <div className="container text-center" ref={bgVideoContentRef}>
              <div
                className={cn(
                  "text-40 max-w-layout-small mx-auto mt-20 mb-6 font-serif font-black",
                  styles.title
                )}
              >
                Smarter Imaging, Exceptional Care <br /> Everyday AI-Powered Solutions
              </div>
              <div className="max-w-layout-xsmall mx-auto">
                Diagnocat is an award-winning AI solution that analyzes 2D and 3D dental images,
                streamlining digital dentistry and enhancing patient care, one scan at a time.
              </div>
            </div>
            <div ref={sectionRef} className="relative z-20 flex items-center justify-center">
              <div ref={animationContainerRef} className="relative mx-auto h-screen w-full">
                <div ref={tooth1Ref} className={cn(toothBaseClassNames, "top-10")}>
                  <Image
                    src={toothState1}
                    className="mx-auto max-w-[50vw]"
                    alt=""
                    width={720}
                    quality={100}
                    priority
                  />
                </div>
                <div ref={tooth2Ref} className={cn(toothBaseClassNames, "top-10 opacity-0")}>
                  <Image
                    src={toothState2}
                    alt=""
                    width={720}
                    priority
                    quality={100}
                    className="mx-auto"
                  />
                  <Image
                    src={captions}
                    alt=""
                    width={980}
                    priority
                    quality={100}
                    className="absolute top-0 z-20 mx-auto"
                    ref={captionsRef}
                  />
                </div>
                <div ref={tooth3Ref} className={cn(toothBaseClassNames, "top-10 opacity-0")}>
                  <Image src={toothState3} alt="" width={720} priority quality={100} />
                </div>
                <div ref={tooth4Ref} className={cn(toothBaseClassNames, "top-10 opacity-0")}>
                  <Image src={toothState4} alt="" width={720} priority quality={100} />
                </div>
                <div ref={tooth5Ref} className={cn(toothBaseClassNames, "top-10 opacity-0")}>
                  <Image src={toothState5} alt="" width={720} priority quality={100} />
                </div>
                <div
                  ref={slideContentRef1}
                  className={cn(slideContentRightClassNames, "items-end right-[5vw]")}
                >
                  <div className="flex flex-col items-center">
                    <SlideTitle title="Appears to be restorative" theme="pink" />
                    <video
                      className="inset-0 mt-10 max-w-[53vw] rounded-2xl object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline

                      >
                      <source src="/video/eng-1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div
                  ref={slideContentRef2}
                  className={cn(slideContentRightClassNames, "items-start left-[5vw]")}
                >
                  <div className="flex flex-col items-center">
                    <SlideTitle title="Appears to be restorative" theme="red" />
                    <video
                      className="inset-0 mt-10 max-w-[53vw] rounded-2xl object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/eng-2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div
                  ref={slideContentRef3}
                  className={cn(slideContentRightClassNames, "items-end right-[5vw]")}
                >
                  <div className="flex flex-col items-center">
                    <SlideTitle title="Appears to be endodontic pathologies" theme="gold" />
                    <video
                      className="inset-0 mt-10 max-w-[53vw] rounded-2xl object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/eng-3.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute top-0 h-[400vh] w-full snap-y snap-mandatory">
            <div className="h-screen snap-start"></div>
            <div className="h-screen snap-start"></div>
            <div className="h-screen snap-start"></div>
            <div className="h-screen snap-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

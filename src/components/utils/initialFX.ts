import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // Ensure elements are visible but prepared for animation
  gsap.set([".landing-h2-1", ".landing-h2-2"], { opacity: 0, y: 40 });
  gsap.set(".landing-info-h2", { opacity: 1 });

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Ensure parent containers are visible, but keep children hidden for GSAP
  gsap.set([".landing-h2-1", ".landing-h2-2"], { opacity: 1 });
  
  var landingTextDeveloper = new SplitText(".landing-h2-1", TextProps);
  var landingTextEngineer = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingTextDeveloper, landingTextEngineer);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1 });
  const delay = 3.5;

  // Ensure both start hidden and reset positions
  gsap.set([Text1.chars, Text2.chars], { opacity: 0, y: 50 });

  tl.fromTo(
    Text1.chars,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      y: 0,
      stagger: 0.05,
    }
  )
    .to(Text1.chars, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.in",
      stagger: 0.05,
      delay: delay,
    })
    .fromTo(
      Text2.chars,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.05,
      }
    )
    .to(Text2.chars, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.in",
      stagger: 0.05,
      delay: delay,
    });
}

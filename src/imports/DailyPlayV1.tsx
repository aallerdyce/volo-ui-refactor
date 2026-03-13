import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-a8h7fytepd";
import imgImage2 from "figma:asset/145536d607c56d6716416d6d82873d35338c7b51.png";
import imgImage3 from "figma:asset/afe135c050de85241aedf0dfef2cbb1cd854b382.png";
import imgHeader from "../assets/3e9a90ace76a58176595dc9be0512af3e7fba920.jpeg";
import imgImage6 from "figma:asset/6e47fac1aa4b6f616be64a30e74a71cdc24cde3b.png";
import imgImage4 from "figma:asset/0ed1436d75827e8f1f5ea5518201ea34dff21aa8.png";
import iconSolo from "../assets/mobile-solo.svg";
import iconFriends from "../assets/mobile-friends.svg";
import iconTeam from "../assets/mobile-team.svg";
import imgMobilFooter from "../assets/mobil-footer.png";
import imgPickleballHero from "../assets/pickleball_hero_new.png";


function Frame2() {
  return (
    <div className="h-[41px] relative flex-1 max-w-[530px] mx-4">
      <div className="h-[41px] w-full relative" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-contain" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}



function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Component 2">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Login</p>
        </div>
      </div>
      <div className="bg-[#c7ff10] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Component 3">
        <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[20px]">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center mx-auto relative shrink-0 w-full max-w-[1216px] px-6" data-name="Container">
      <div className="h-[37px] relative shrink-0 w-[91px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when modal is open and reset on desktop resize
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup if window is resized past lg breakpoint (1024px)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed bg-[#0034DC] flex h-[80px] lg:h-[64px] items-center justify-between left-0 top-0 w-full z-50 px-6 shadow-sm lg:shadow-none" data-name="Nav">
        <div className="h-[37px] relative shrink-0 w-[91px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
        </div>

        <div className="flex items-center gap-3 lg:gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors opacity-70 hover:opacity-100">Leagues</a>
            <a href="/daily-play" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors">Daily Play</a>
            <a href="/rentals" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors opacity-70 hover:opacity-100">Rentals</a>
            <Container2 />
          </div>

          <div onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden size-10 bg-[#c7ff10] rounded-full flex items-center justify-center text-black shadow-sm cursor-pointer hover:bg-[#b0eb00] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0034DC] flex flex-col lg:hidden animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between px-6 h-[80px] shrink-0 border-b border-white/10">
            <div className="h-[37px] relative shrink-0 w-[91px]">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="size-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-6 pt-10">
            <a href="/" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all opacity-70 hover:opacity-100">Leagues</a>
            <a href="/daily-play" className="text-[#c7ff10] font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all flex items-center gap-3">
              Daily Play
            </a>
            <a href="/rentals" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all opacity-70 hover:opacity-100">Rentals</a>
          </div>
        </div>
      )}
    </>
  );
}


function Frame() {
  return (
    <div className="h-[64px] w-full">
      <Nav />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative mb-4 lg:mb-6">
      <div className="h-[65px] relative shrink-0 w-[103px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Proud sponsor</p>
      </div>
    </div>
  );
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-[14px] flex items-center justify-center" data-name="trophy 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4002)" id="trophy 1">
          <path d={svgPaths.p3128ba00} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p23eb5980} id="Vector_2" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p14917c00} id="Vector_3" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d="M2 11H10" id="Vector_4" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p27172900} id="Vector_5" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p11385300} id="Vector_6" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_1_4002">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}


function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[#22c55e] content-stretch flex h-[30px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-none">Registration Open</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex flex-wrap gap-2 items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f8fafc] flex items-center gap-1.5 h-[30px] px-3 relative rounded-full shrink-0 shadow-sm shadow-black/5 border border-white/20" data-name="badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15.5V8.5m-3.5 3.5 3.5-3.5 3.5 3.5" />
          <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-5 8" />
          <path d="M11 20.7a9 9 0 0 1-6.5-4.5" />
          <path d="M3.5 12.5v-.1" />
          <path d="M5 7.5v-.1" />
        </svg>
        <span className="font-['VoloSansPro'] font-black text-[#1e293b] text-[13px] tracking-tight leading-none">Pickup</span>
      </div>
      <OverlayBorderOverlayBlur />
    </div>
  );
}




function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[1.1] not-italic relative shrink-0 text-[32px] lg:text-[46px] text-white w-full max-w-[1124px] tracking-tight">
        <p>Pickleball Pickup · Open · Advanced</p>
      </div>
    </div>
  );
}



function Container7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location">
      <div className="text-[#8CA6FA] shrink-0">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[14px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[13px] text-white">
        <p>Telegraph Hill Community Center (North Beach)</p>
      </div>
    </div>
  );
}




function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[13px] text-white">
        <p>Thu, Dec 18 • 8:15pm - 9:45pm</p>
      </div>
    </div>
  );
}


function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
              <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-wrap lg:flex-nowrap gap-x-1 lg:gap-[16px] gap-y-2 items-center min-h-px min-w-px relative w-full" data-name="Container">
      <Container7 />
      <div className="hidden lg:block shrink-0">
        <Container8 />
      </div>
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[48px] relative size-full">
        <Frame4 />
        <Container4 />
        <Heading />
        <Container5 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[10px] h-auto min-h-[400px] lg:min-h-[480px] items-start overflow-clip relative rounded-none lg:rounded-[24px] shadow-none lg:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full z-0" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover scale-[1.15]" src={imgPickleballHero} />
      </div>



      <div className="absolute bg-gradient-to-t from-[#0f172a] inset-0 to-[rgba(15,23,42,0)] via-[45%] lg:via-[23.077%] via-[rgba(15,23,42,0.5)]" data-name="Gradient" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[8px] lg:gap-[16px] items-start p-6 lg:p-[48px] relative size-full justify-end">
          <div className="mt-auto w-full">
            <Container4 />
            <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[1.1] not-italic relative shrink-0 text-[32px] lg:text-[46px] text-white w-full max-w-[1124px] mt-4 tracking-tight">
              <p>Pickleball Pickup · Open · Advanced</p>
            </div>
            <div className="mt-4">
              <Container5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[20px] relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Format</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
              <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-12.92%_-33.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33096 6.49632">
              <path d={svgPaths.p39a2ea10} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.3335 5.24683">
              <path d={svgPaths.p234883c0} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
              <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">2v2 Open</p>
      </div>
    </div>
  );
}


function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Time</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
              <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
              <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">8:15 PM</p>
      </div>
    </div>
  );
}


function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Duration</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
              <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_66.63%_41.67%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/2 right-[49.96%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[33.33%] right-[66.63%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.67%] right-[33.29%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">90 min</p>
      </div>
    </div>
  );
}


function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Roster Min</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
              <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
              <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
              <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 1.33333">
              <path d="M4.666667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">6 Players</p>
      </div>
    </div>
  );
}


function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full shadow-sm" data-name="Background+Border+Shadow">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch grid grid-cols-2 lg:flex lg:flex-row gap-y-8 gap-x-4 lg:gap-[32px] items-start lg:justify-center p-6 lg:p-[25px] relative w-full">
          <Container12 />
          <Container15 />
          <Container18 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">The Gist</p>
      </div>
    </div>
  );
}

function Container25() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
        <p className="leading-[22px]">
          What's the Dilly with Pickleball?! We are bringing the world's fastest growing sport to Telegraph Hill Neighborhood Center. WE PROVIDE THE PADDLES AND BALLS, you just show up and play!
        </p>

        {expanded && (
          <div className="flex flex-col gap-6 mt-4 w-full">
            <span className="block text-[#334155] text-[14px] leading-[22px]">
              This is a great opportunity to brush up on your skills, get some practice time in with your team, or meet other players and potentially find a team to join!
            </span>

            <div className="flex flex-col gap-4">
              <h4 className="font-['VoloSansPro'] font-bold text-[16px] text-black">Game Details</h4>
              <div className="flex flex-col gap-2 pl-4">
                <div className="flex items-center gap-2 text-[#71717a] text-[14px]">
                  <div className="size-1 rounded-full bg-[#013af5]" />
                  <p>2v2 Pickleball</p>
                </div>
                <div className="flex items-center gap-2 text-[#71717a] text-[14px]">
                  <div className="size-1 rounded-full bg-[#013af5]" />
                  <p>Self Refereed</p>
                </div>
                <div className="flex items-center gap-2 text-[#71717a] text-[14px]">
                  <div className="size-1 rounded-full bg-[#013af5]" />
                  <p>Open Gender</p>
                </div>
                <div className="flex items-center gap-2 text-[#71717a] text-[14px]">
                  <div className="size-1 rounded-full bg-[#013af5]" />
                  <p>Equipment Provided</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-['VoloSansPro'] font-bold text-[16px] text-black">Refund Policy</h4>
              <p className="text-[#334155] text-[14px] leading-[22px]">
                We do not provide refunds. If games are cancelled due to the weather or not enough players, we will reschedule for another day or issue a credit to your account to be used for any other league or pickup.
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#013af5] font-bold text-[14px] mt-4 hover:underline focus:outline-none w-fit text-left"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

function SectionSkill() {
  return (
    <div className="flex flex-col gap-4 w-full mt-10">
      <h3 className="font-['VoloSansPro'] font-bold text-[24px] text-black">Skill Level</h3>
      <div className="bg-white border border-[#f1f5f9] rounded-[16px] p-6 flex items-start gap-4">
        <div className="size-10 rounded-full bg-[#fff1f2] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.204 1.144-3.001" /></svg>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-['VoloSansPro'] font-bold text-[16px] text-black">Advanced / Competitive</h4>
          <p className="text-[#64748b] text-[14px] leading-[22px]">
            For experienced players looking for high-level play. Expect fast-paced rallies, strategic dinking, and competitive games. Players should have a strong command of all shots and rules.
          </p>
        </div>
      </div>
    </div>
  );
}


function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] mt-[-1px]">What You Get</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">{`Professional league management & team shirts included`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">6 guaranteed games + playoffs for top 4 teams</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Social perks and bragging rights prizes</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic pl-[14px] relative text-[14px] w-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Heading2 />
      <List />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="content-stretch flex items-start relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <Frame3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] mt-[-1px]">Game Details</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Games between 8pm - 10pm</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Full team Min: 9 players</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Duration: 6 Wks + Playoffs</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Typically 1 game per night</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic pl-[14px] relative text-[14px] w-full">
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative flex-1 min-w-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Heading 4" />;
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative flex-1 min-w-0" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-start gap-3 w-full">
        <Container25 />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-1.5 text-[#013af5] font-bold text-[13.5px] transition-all duration-300 active:scale-95"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-[24px] w-full animate-in fade-in slide-in-from-top-2 duration-500">
          <BackgroundVerticalBorder />
          <Container26 />
        </div>
      )}
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container24 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">Skill Level</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start p-[12px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="relative shrink-0 size-[24px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_33.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-50%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0001 4.00006">
              <path d={svgPaths.p18fa300} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_62.46%_62.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_37.46%_62.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px] mt-[-1px]">Recreational</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] justify-center leading-[20px] not-italic relative shrink-0 text-[#475569] text-[14px]">
        <p>Players who have minimal to no experience. Geared toward people who want friendly competition and then head to the bar. Players don't take the game too seriously—it's about the workout and socializing. Great for beginners or those returning to the sport.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[6.75px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Heading6 />
      <Container30 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex gap-[16px] items-start px-[25px] py-[28px] relative w-full">
        <Background />
        <Container29 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading5 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">{`Recreational Perks & Social`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row font-['VoloSansPro'] font-bold gap-2 lg:gap-[112px] items-start lg:items-center not-italic relative shrink-0 text-[12px] w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#c7ff10]">
        <p className="leading-tight">The Facility</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8ca6fa]">
        <p className="leading-tight">Venue perks</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10.9999">
              <path d={svgPaths.p37151e80} id="Vector" stroke="var(--stroke-0, #F2F5FE)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, #F2F5FE)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fe] text-[0px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[12px] underline">315 Fair Oaks St</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[157px]">
        <p className="leading-[20px]">Immaculate Conception Academy</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Container33 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">New Facility</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Street Parking</p>
      </div>
    </div>
  );
}



function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-end relative shrink-0 w-full">
      <Item7 />
      <Item8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-1 h-[72px] items-start justify-end min-h-px min-w-px relative">
      <Frame10 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-10 p-[16px] right-[-0.32px] top-[0.25px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Lucide Icons">
        <div className="absolute inset-[13.48%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.35%_-5.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 51.7436">
              <path d={svgPaths.p2e00e400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white w-full relative rounded-[16px] overflow-hidden flex flex-col border border-[#f1f5f9]" data-name="Background+Border">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 lg:p-8 relative w-full items-center">
        {/* Venue Information */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-black font-bold text-[18px] lg:text-[19px] tracking-tight">Telegraph Hill Community Center</h3>
          <p className="text-[#64748b] text-[14px]">660 Lombard St, San Francisco, CA 94133</p>
        </div>

        {/* View Map Button */}
        <button className="bg-white border border-[#f1f5f9] px-6 py-2.5 rounded-full text-[#013af5] font-bold text-[13px] shadow-sm hover:bg-[#f8fafc] transition-colors shrink-0">
          View Map
        </button>
      </div>
    </div>
  );
}


function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-auto" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0034dc] text-[12px] w-full">
        <p className="leading-[16px]">Sponsor Bar Specials</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px] mt-[-1px]">Teeth</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10.9999">
              <path d={svgPaths.p37151e80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[12px] underline">2323 Mission St</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[152px]">
      <Heading8 />
      <Container36 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#013af5] text-[12px] whitespace-nowrap text-right">
        <p className="leading-[20px]">Specials</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap text-right">
        <p className="leading-[20px]">Half off Truly buckets</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap text-right">
        <p className="leading-[20px]">BOGO pitchers</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0 w-full">
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-1 h-[72px] items-start justify-end min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white w-full relative rounded-[16px] overflow-hidden flex flex-col border border-[#f1f5f9]" data-name="Component 4">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 pb-[28px] pt-[24px] px-[28px] relative w-full h-full z-10 flex-1">

        {/* Left Side: Venue Information */}
        <div className="flex flex-col gap-3 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider">Sponsor Bar</div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-black font-bold text-[17px] lg:text-[18px] leading-tight tracking-tight">Teeth</h3>
            <div className="text-[#64748b] text-[12px] underline underline-offset-4 opacity-80 decoration-[1px]">
              <p>2323 Mission St, San Francisco, CA 94110</p>
            </div>
          </div>
        </div>

        {/* Right Side: Specials */}
        <div className="flex flex-col gap-4 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider">Specials</div>
          <div className="flex flex-col gap-1.5 items-start">
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>Half off Truly buckets</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>BOGO Bud Light pitchers</p>
            </div>
          </div>
        </div>

      </div>
      {/* Background Icon Decoration: Beer Mug */}
      <div className="absolute -top-8 -right-8 opacity-[0.06] p-2 pointer-events-none">
        <svg className="size-[140px]" fill="none" viewBox="0 0 64 64">
          {/* Simple Beer Mug Path or representative icon */}
          <path d="M18 16V44C18 46.2091 19.7909 48 22 48H42C44.2091 48 46 46.2091 46 44V16H18Z" stroke="#013af5" strokeWidth="2.5" />
          <path d="M46 22H52C54.2091 22 56 23.7909 56 26V38C56 40.2091 54.2091 42 52 42H46" stroke="#013af5" strokeWidth="2.5" />
          <path d="M18 12C18 9.79086 19.7909 8 22 8H42C44.2091 8 46 9.79086 46 12V16H18V12Z" stroke="#013af5" strokeWidth="2.5" fill="#013af5" fillOpacity="0.12" />
          <path d="M26 24V40" stroke="#013af5" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 24V40" stroke="#013af5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-10 p-[16px] right-[-0.34px] top-[0.25px]" data-name="Container">
      <div className="relative shrink-0 size-[64px]" data-name="Component 3">
        <div className="absolute inset-[45.83%_12.5%_29.17%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-15.63%_-23.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6667 21">
              <path d={svgPaths.p160d8480} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[37.5%] right-[62.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-15.63%_-2.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 21">
              <path d="M2.5 2.5V18.5" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[45.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-15.63%_-2.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 21">
              <path d="M2.5 2.5V18.5" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_20.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-15.63%_-5.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.6667 21">
              <path d={svgPaths.p17197280} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_29.17%_8.33%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-6.7%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 42.3333">
              <path d={svgPaths.p6469600} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Component />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading7 />
      <Container31 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">Weekly Schedule</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 1</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">T-Shirt Week - Season Opener</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background1 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 2-3</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Regular Season</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background2 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 4</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">The Kids Week (Charity Focus)</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background3 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 5-6</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Regular Season Wrap-up</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background4 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#013af5] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Week 7</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#013af5] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Playoffs (Top 4)</p>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[#F2F5FE] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background5 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <OverlayHorizontalBorder />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <Container38 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading9 />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">{`Useful Links & Policies`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 relative shrink-0 w-full" data-name="Container">
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.88%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6666">
                <path d={svgPaths.p22c92800} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Giving Back</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[29.15%_37.83%_45.83%_37.87%]" data-name="Vector">
            <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22018 5.3365">
                <path d={svgPaths.pb91f080} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
            <div className="absolute inset-[-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">FAQ/Support</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                <path d={svgPaths.p15c29000} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Forfeits Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%_9.38%]" data-name="Vector">
            <div className="absolute inset-[-5%_-5.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3305 14.6667">
                <path d={svgPaths.p210edd00} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Jersey Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p252ee980} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667">
                <path d="M0.666667 0.666667V4H4" id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Refund Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[7.47%_7.47%_7.47%_7.47%]" data-name="Vector">
            <div className="absolute inset-[-4.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p210edd00} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Weather Policy</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Heading10 />
      <Container45 />
    </div>
  );
}

function Container11({ isOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative flex-1 min-w-0 w-full" data-name="Container">
      <BackgroundBorderShadow />

      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-['VoloSansPro'] font-bold text-[24px] text-black tracking-tight">The Gist</h3>
        <Container25 />
      </div>

      <SectionSkill />

      <div className="flex flex-col gap-6 w-full mt-4">
        <h3 className="font-['VoloSansPro'] font-bold text-[24px] text-black tracking-tight">Location</h3>
        <BackgroundBorder />
      </div>
    </div>
  );
}


function RegistrationExplainer() {
  const cards = [
    { id: 'solo', title: "Solo", sub: "Volo finds you a team.", icon: iconSolo },
    { id: 'friends', title: "Friends", sub: "Unique SMS link. Separate signup.", icon: iconFriends },
    { id: 'team', title: "Team", sub: "Prepay for the whole roster.", icon: iconTeam }
  ];

  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border border-[#f1f5f9] p-3 rounded-[16px] text-left flex flex-col h-full"
        >
          <div className="mb-2">
            <img src={card.icon} alt={card.title} className="size-7" />
          </div>
          <h3 className="font-['VoloSansPro'] font-bold text-[18px] mb-1 text-black leading-tight tracking-tight">{card.title}</h3>
          <p className="font-['VoloSansPro'] text-[13px] text-[#64748b] font-medium leading-[1.2]">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-none">Registration closes 01/26</p>
      </div>
    </div>
  );
}

function Container47({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <span className="font-['VoloSansPro'] font-medium text-[12px] text-white/80">Incl. Fees</span>
      <div
        className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${isOn ? 'bg-white/50' : 'bg-white/30'}`}
      >
        <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${isOn ? 'translate-x-4' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}

function Background6({ isOn, setIsOn }: { isOn: boolean; setIsOn: (val: boolean) => void }) {
  return (
    <div className="bg-[#013af5] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Heading11 />
          <Container47 isOn={isOn} onClick={() => setIsOn(!isOn)} />
        </div>
      </div>
    </div>
  );
}

function Text({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center relative w-full" data-name="text">
      <div className={`flex flex-col font-['VoloSansPro'] justify-center leading-none not-italic relative shrink-0 text-[14px] text-center w-full transition-all duration-200 ${active ? 'font-bold text-black' : 'font-medium text-[#64748b]'}`}>
        <p className="mt-[-1px]">{label}</p>
      </div>
    </div>
  );
}

function Tab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <div
      className={`flex-1 relative rounded-full cursor-pointer transition-all duration-200 ${active ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      onClick={onClick}
      data-name="tab"
    >
      <div className="flex items-center justify-center px-3 py-2 relative w-full h-full">
        <Text active={active} label={label} />
      </div>
    </div>
  );
}

/* Removed Tab1 and Tab2 as they are now unified under the Tab component */

function Tabs({ activeTab, setTab }: { activeTab: string; setTab: (t: string) => void }) {
  return (
    <div className="bg-[#f1f5f9] min-h-[40px] relative rounded-full shrink-0 w-full" data-name="tabs">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[4px] relative w-full">
          <Tab active={activeTab === 'solo'} onClick={() => setTab('solo')} label="Solo" />
          <Tab active={activeTab === 'friends'} onClick={() => setTab('friends')} label="Friends" />
          <Tab active={activeTab === 'team'} onClick={() => setTab('team')} label="Team" />
        </div>
      </div>
    </div>
  );
}

function Frame13({ activeTab }: { activeTab: string }) {
  const subtitles = {
    solo: "Volo finds you a team.",
    friends: "Send a unique link, and sign up separately.",
    team: "Prepay for the whole roster."
  };

  return (
    <div className="content-stretch flex flex-col font-['VoloSansPro'] items-center relative shrink-0 whitespace-nowrap w-full -mt-2">
      <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] text-[13px] text-center font-normal mb-1">
        <p className="leading-[20px]">{subtitles[activeTab as keyof typeof subtitles]}</p>
      </div>
    </div>
  );
}

function TimelineCircle({ state, variant, onClick }: { state: 'active' | 'past' | 'future'; variant: 'early' | 'standard'; onClick: () => void }) {
  const isEarly = variant === 'early';
  const color = isEarly ? "#16a34a" : "#013AF5";

  if (state === 'active') {
    return (
      <div className="relative shrink-0 size-[24px] cursor-pointer group" onClick={onClick}>
        {/* Outer Ring */}
        <div
          className="absolute inset-x-[-1px] inset-y-[-1px] rounded-full bg-white border-[1.5px] border-white shadow-[0_0_0_2px_var(--ring-color),0_4px_8px_rgba(0,0,0,0.12)]"
          style={{ '--ring-color': color } as any}
        />
        {/* Inner Circle */}
        <div
          className="absolute inset-[3px] rounded-full shadow-inner"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }

  // Hollow states
  const ringColor = (isEarly && state === 'past') ? "#16a34a" : "#e2e8f0";
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer group flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className="size-[20px] rounded-full bg-white border-[1.5px] border-white shadow-[0_0_0_2.5px_var(--ring-color),0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300"
        style={{ '--ring-color': ringColor } as any}
      />
    </div>
  );
}

function TimelineLabel({ active, label, variant, onClick }: { active: boolean; label: string; variant: 'early' | 'standard'; onClick: () => void }) {
  let color = '#94a3b8';
  if (variant === 'early') {
    color = '#16a34a';
  } else if (active) {
    color = '#000000';
  }

  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 pt-3 cursor-pointer" onClick={onClick}>
      <span
        className="font-['VoloSansPro'] font-semibold text-[12px] leading-tight text-center transition-colors duration-200"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function Container50({ phase, setPhase }: { phase: string; setPhase: (p: string) => void }) {
  const isEarlyBird = phase === 'early-bird';
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full px-2" data-name="Container">
      {/* Background Track */}
      <div className="absolute h-[6px] left-0 right-0 rounded-full top-[9px] overflow-hidden bg-[#f1f5f9]" data-name="Background">
        {/* Green Segment (Early Bird Zone) */}
        <div className="absolute left-0 w-[24%] h-full bg-[#16a34a]" />
      </div>

      <div className="relative shrink-0 w-full z-10 mt-[2px]" data-name="Container">
        <div className="content-stretch flex items-start justify-between relative w-full">
          {/* Early Bird */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isEarlyBird ? 'active' : 'past'}
              variant="early"
              onClick={() => setPhase('early-bird')}
            />
            <TimelineLabel active={isEarlyBird} variant="early" label="Early Bird" onClick={() => setPhase('early-bird')} />
          </div>

          {/* Regular */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isRegular ? 'active' : (isLastChance ? 'past' : 'future')}
              variant="standard"
              onClick={() => setPhase('regular')}
            />
            <TimelineLabel active={isRegular} variant="standard" label="Regular" onClick={() => setPhase('regular')} />
          </div>

          {/* Last Chance */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isLastChance ? 'active' : 'future'}
              variant="standard"
              onClick={() => setPhase('last-chance')}
            />
            <TimelineLabel active={isLastChance} variant="standard" label="Last Chance" onClick={() => setPhase('last-chance')} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';
  let price = 110.00;

  if (activeTab === 'team') {
    price = isLastChance ? 992.28 : (isRegular ? 982.28 : 917.78);
  } else {
    price = isLastChance ? 135.00 : (isRegular ? 125.00 : 110.00);
  }

  // Application of fee multiplier (matching mockups approx)
  const finalPrice = isOn ? (price * 1.08136) : price;
  const priceStr = `$${finalPrice.toFixed(2)}`;

  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">{priceStr}</p>
      </div>
    </div>
  );
}

function Container56({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  const labels = {
    solo: "Solo",
    friends: "Per player",
    team: "Prepay"
  };

  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{labels[activeTab as keyof typeof labels]}</p>
      </div>
      <Container57 isOn={isOn} activeTab={activeTab} phase={phase} />
    </div>
  );
}

function Frame14({ phase, activeTab }: { phase: string; activeTab: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  let saveAmount = "$15";
  if (isLastChance) {
    saveAmount = activeTab === 'team' ? "$85.25" : "$25";
  } else if (activeTab === 'team') {
    saveAmount = "$75.25";
  }

  let bgClass = "bg-[#dcfce7]";
  let textClass = "text-[#16a34a]";
  let pillText = "Early Bird";

  if (isLastChance) {
    bgClass = "bg-[#fee2e2]";
    textClass = "text-[#ef4444]";
    pillText = `Save ${saveAmount} now`;
  } else if (isRegular) {
    bgClass = "bg-[#ffedd5]";
    textClass = "text-[#f97316]";
    pillText = `Save ${saveAmount} now`;
  }

  return (
    <div className={`content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-full shrink-0 transition-colors duration-200 ${bgClass}`}>
      <div className={`flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${textClass}`}>
        <p className="leading-[16px]">{pillText}</p>
      </div>
    </div>
  );
}

function Container59({ phase, activeTab }: { phase: string; activeTab: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Frame14 phase={phase} activeTab={activeTab} />
    </div>
  );
}

function Container60({ phase }: { phase: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  let text = "Price ends Dec 12";
  let textColor = "text-[#f97316]";
  let bgColor = "bg-[#ffedd5]";

  if (isLastChance) {
    text = "Closes Jan 26";
    textColor = "text-[#ef4444]";
    bgColor = "bg-[#fee2e2]";
  } else if (isRegular) {
    text = "Price ends Jan 12";
  }

  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className={`content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-full shrink-0 transition-colors duration-200 ${bgColor}`}>
        <div className={`flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 ${textColor} text-[12px] whitespace-nowrap`}>
          <p className="leading-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Container58({ phase, activeTab }: { phase: string; activeTab: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container59 phase={phase} activeTab={activeTab} />
          <Container60 phase={phase} />
        </div>
      </div>
    </div>
  );
}

function Component2({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Component 7">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Container56 isOn={isOn} activeTab={activeTab} phase={phase} />
        <Container58 phase={phase} activeTab={activeTab} />
      </div>
    </div>
  );
}

function Component1({ activeTab }: { activeTab: string }) {
  const labels = {
    solo: "Register - Solo",
    friends: "Register - Friends",
    team: "Register - Team"
  };

  return (
    <div className="bg-[#013af5] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#002bb5] transition-colors duration-200" data-name="Component 4">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">{labels[activeTab as keyof typeof labels]}</p>
      </div>
    </div>
  );
}

function Container55({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Component2 isOn={isOn} activeTab={activeTab} phase={phase} />
      <Component1 activeTab={activeTab} />
    </div>
  );
}

function Container49({ isOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full" data-name="Container">
      <Tabs activeTab={activeTab} setTab={setTab} />
      <Frame13 activeTab={activeTab} />
      <Container50 phase={phase} setPhase={setPhase} />
      <Container55 isOn={isOn} activeTab={activeTab} phase={phase} />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center w-full">
        <p className="mb-0.5">Joining a friend’s group?</p>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] justify-center leading-snug not-italic relative shrink-0 text-[#64748b] text-[13px] text-center w-full">
        <p>Use their unique invite link to play together.</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start py-[24px] px-[24px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container61 />
    </div>
  );
}

function EarlyBirdSoloPresenter() {
  const [selectedPlan, setSelectedPlan] = useState<'non-member' | 'volo-pass'>('non-member');
  const [isEditingSpot, setIsEditingSpot] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Any team');
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  const teams = [
    { name: 'Any team', spots: 'No preference', available: true },
    { name: 'Team Bar Flight', spots: '2 spots', available: true },
    { name: 'Roundhouse', spots: '1 spot', available: true },
    { name: 'Can You Kick It', spots: '(full)', available: false },
    { name: 'Calling All', spots: '(full)', available: false }
  ];

  return (
    <div
      className="w-full bg-white border-transparent lg:border-[#f1f5f9] border lg:rounded-[24px] overflow-hidden lg:shadow-xl shadow-none flex flex-col"
      data-name="Registration Card"
    >
      {/* Header */}
      <div className="bg-[#013af5] px-4 lg:px-6 py-3 flex justify-between items-center text-white font-['VoloSansPro'] font-bold text-[14px] tracking-wide">
        <span>Registration open</span>
        <span className="opacity-80 text-[14px]">Thu, Dec 18 @ 8:15 PM</span>
      </div>

      <div className="px-4 lg:px-6 py-5 lg:py-6 flex flex-col gap-3">
        {/* Registration Progress */}
        <div className="flex flex-col gap-1.5 py-1">
          <div className="flex justify-between items-end">
            <span className="font-['VoloSansPro'] font-bold text-[14px] text-black">Players registered</span>
            <span className="font-['VoloSansPro'] font-bold text-[14px] text-black">3 / 6</span>
          </div>
          <div className="h-2 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
            <div className="h-full bg-[#22c55e] rounded-full w-1/2" />
          </div>
        </div>

        {/* Your Spot Dropdown */}
        <div className="flex flex-col gap-2 relative">
          <div
            onClick={() => setIsEditingSpot(!isEditingSpot)}
            className="w-full bg-white border border-[#e2e8f0] rounded-[16px] px-4 py-3 text-[16px] font-['VoloSansPro'] font-bold text-black cursor-pointer relative flex flex-col justify-center transition-colors hover:border-black/20"
          >
            <div className="text-[#64748b] text-[12px] leading-none mb-1.5">Your spot</div>
            <div className="leading-none">{selectedTeam}</div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={`size-4 transition-transform duration-200 ${isEditingSpot ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          {isEditingSpot && (
            <>
              {/* Invisible backdrop to dismiss dropdown */}
              <div className="fixed inset-0 z-40" onClick={() => setIsEditingSpot(false)} />

              {/* Dropdown Menu Overlay */}
              <div className="relative lg:absolute top-[100%] left-0 w-full mt-2 bg-white border border-[#e2e8f0] rounded-[16px] shadow-sm lg:shadow-[0px_8px_20px_rgba(0,0,0,0.06)] z-50 overflow-hidden text-[14px] font-['VoloSansPro'] font-medium flex flex-col p-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                {teams.map((team) => (
                  <div
                    key={team.name}
                    onClick={() => {
                      if (team.available) {
                        setSelectedTeam(team.name);
                        setIsEditingSpot(false);
                      }
                    }}
                    className={`flex justify-between items-center px-3 py-2.5 rounded-[10px] transition-colors ${team.available
                      ? 'cursor-pointer hover:bg-[#f8fafc]'
                      : 'opacity-40 grayscale cursor-not-allowed'
                      } ${selectedTeam === team.name ? 'bg-[#f1f5f9]' : ''}`}
                  >
                    <span className={`font-bold ${selectedTeam === team.name ? 'text-black' : 'text-[#1e293b]'}`}>
                      {team.name}
                    </span>
                    <span className={`text-[12px] font-medium ${team.available ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                      {team.spots === 'No preference' ? '' : team.spots}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="h-px w-full bg-[#e2e8f0] my-2" />
        {/* Pricing Options */}
        <div className="flex flex-col gap-3">
          {/* Volo Pass */}
          <div
            onClick={() => setSelectedPlan('volo-pass')}
            className={`rounded-[16px] py-3 px-4 flex justify-between items-center relative cursor-pointer transition-all duration-300 ${selectedPlan === 'volo-pass'
              ? 'border-2 border-black bg-white z-10'
              : 'border border-[#e2e8f0] bg-white hover:bg-[#f8fafc]'
              }`}
          >
            <div className="flex flex-col">
              <span className="font-['VoloSansPro'] font-bold text-[16px] text-black leading-none">Volo Pass</span>
              <span className="text-[#94a3b8] text-[12px] leading-none mt-1.5">Join for $35/mo. Play daily for free.</span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="font-['VoloSansPro'] font-bold text-[16px] text-black leading-none tracking-tight">FREE</span>
              <span className="text-[#013af5] font-bold text-[12px] leading-none mt-1.5 hover:underline cursor-pointer">Learn more</span>
            </div>
          </div>

          {/* Non-Member */}
          <div
            onClick={() => setSelectedPlan('non-member')}
            className={`rounded-[16px] py-3 px-4 flex justify-between items-center relative cursor-pointer transition-all duration-300 ${selectedPlan === 'non-member'
              ? 'border-2 border-black bg-white z-10'
              : 'border border-[#e2e8f0] bg-white hover:bg-[#f8fafc]'
              }`}
          >
            <div className="flex flex-col">
              <span className="font-['VoloSansPro'] font-bold text-[16px] text-black leading-none">Non-Member</span>
              <span className="text-[#94a3b8] text-[12px] leading-none mt-1.5">Standard Price</span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="font-['VoloSansPro'] font-bold text-[16px] text-black leading-none">$5</span>
              <span className="text-[#94a3b8] text-[12px] leading-none mt-1.5">+ $1.00 fee</span>
            </div>
          </div>
        </div>

        {/* Extra Options (Promo & Donation) - Smooth Height Transition */}
        <div className={`grid transition-all duration-300 ease-in-out ${selectedPlan === 'non-member'
          ? 'grid-rows-[1fr] opacity-100 mt-0'
          : 'grid-rows-[0fr] opacity-0 -mt-3'
          }`}>
          <div className="overflow-hidden flex flex-col gap-3">
            {/* Promo Code Toggle */}
            <div className={`relative mt-1 transition-all ${promoError ? 'pb-5' : 'pb-0'}`}>
              {!isPromoApplied ? (
                <>
                  {!showPromo ? (
                    <button
                      onClick={() => setShowPromo(true)}
                      className="text-[#013af5] font-['VoloSansPro:Bold',sans-serif] text-[13px] font-bold self-start hover:underline mt-1 transition-colors"
                    >
                      Promo code?
                    </button>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoError(false);
                        }}
                        placeholder="Promo code"
                        className={`w-full bg-white border ${promoError ? 'border-red-500 focus:border-red-500 text-red-600' : 'border-[#e2e8f0] focus:border-black/20'} rounded-[16px] pl-4 pr-20 py-4 text-[16px] font-medium outline-none transition-colors uppercase placeholder:normal-case placeholder:font-normal ${promoError ? 'placeholder:text-red-400' : 'placeholder:text-[#94a3b8]'}`}
                        autoFocus
                      />
                      <button
                        onClick={() => {
                          if (promoCode.trim().length === 0) return;
                          if (promoCode.toUpperCase() === 'VOLOUX') {
                            setIsPromoApplied(true);
                            setPromoError(false);
                          } else {
                            setPromoError(true);
                          }
                        }}
                        className={`absolute right-5 top-[28px] -translate-y-1/2 font-bold text-[14px] transition-colors ${promoCode.length > 0 ? (promoError ? 'text-red-500 hover:opacity-80' : 'text-[#013af5] hover:opacity-80') : 'text-[#94a3b8]'}`}
                      >
                        Apply
                      </button>
                      {promoError && (
                        <p className="text-red-500 text-[12px] font-medium mt-1.5 ml-2 absolute -bottom-5">Try another code</p>
                      )}
                    </>
                  )}
                </>
              ) : (
                <div className="w-full bg-[#f0fdf4] border-2 border-[#16a34a] rounded-[16px] px-4 py-2 flex justify-between items-center relative min-h-[58px]">
                  <div className="flex items-center gap-3">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#16a34a" className="size-6 shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="font-['VoloSansPro'] font-bold text-[16px] text-black leading-tight uppercase">{promoCode}</span>
                      <span className="text-[#94a3b8] text-[13px] leading-tight mt-0.5">50% discount (-$3)</span>
                    </div>
                  </div>
                  <button onClick={() => { setIsPromoApplied(false); setPromoCode(''); setShowPromo(false); }} className="text-black hover:opacity-70 p-1 mr-1">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex flex-col gap-2.5 pt-1 px-1 mt-1 border-t border-[#e2e8f0] pt-4">
          <label className="flex items-center gap-2 cursor-pointer group overflow-hidden">
            <input type="checkbox" className="size-[14px] shrink-0 rounded border-[#cbd5e1] text-[#013af5] focus:ring-[#013af5]" />
            <span className="text-[#64748b] text-[10px] font-normal leading-tight truncate mt-0.5">
              Agree to: <span className="underline underline-offset-2 hover:opacity-80 transition-opacity">Baltimore General Liability Waiver & Code of Conduct</span>
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group overflow-hidden">
            <input type="checkbox" className="size-[14px] shrink-0 rounded border-[#cbd5e1] text-[#013af5] focus:ring-[#013af5]" />
            <span className="text-[#64748b] text-[10px] font-normal leading-tight truncate mt-0.5">
              Agree to: <span className="underline underline-offset-2 hover:opacity-80 transition-opacity">Cancellation and No-Show Policy</span>
            </span>
          </label>
          {/* Volo Kids Donation */}
          <label className="flex items-start gap-2 cursor-pointer group pt-1">
            <input type="checkbox" className="size-[14px] shrink-0 mt-[2px] rounded border-[#cbd5e1] text-[#013af5] focus:ring-[#013af5]" />
            <div className="flex flex-col min-w-0 flex-1 mt-0.5">
              <span className="text-[#64748b] text-[12px] leading-tight font-normal">
                Donate $1 to Volo Kids at no extra cost.
              </span>
            </div>
          </label>
        </div>

        {/* Primary Action */}
        <div className="flex flex-col gap-3 mt-2 lg:relative lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 lg:pb-0 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] pb-SafeArea">
          <button className="bg-[#013af5] hover:bg-[#0034dc] text-white font-['VoloSansPro'] font-bold text-[16px] py-4 rounded-[16px] shadow-lg shadow-[#013af5]/20 transition-all active:scale-[0.98]">
            Register ({selectedPlan === 'non-member' ? (isPromoApplied ? '$3' : '$6') : '$0'})
          </button>
          <p className="text-[#64748b] text-[11px] text-center">Card ending XXXX <span className="text-black font-bold">3728</span></p>
        </div>
      </div>
    </div>
  );
}




function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[20.64px] pr-[20.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="mb-0">Secure</p>
        <p>Checkout</p>
      </div>
    </div>
  );
}

function BadgeDollarSign() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="badge-dollar-sign 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="badge-dollar-sign 1">
          <path d={svgPaths.p3d768d80} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3836560} id="Vector_2" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18V6" id="Vector_3" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[76px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[8px] self-stretch shrink-0 w-[113.77px]" data-name="Component 9">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center p-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Component 3">
              <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
                    <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-25%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
                    <path d="M1 3L3 5L7 1" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <Container63 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] self-stretch shrink-0 w-[113.77px]" data-name="Component 9">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center p-[8px] relative size-full">
            <BadgeDollarSign />
            <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap whitespace-pre">
              <p className="mb-0">{`Early Bird `}</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="hidden lg:flex flex-col shrink-0 w-[380px] relative" data-name="Container">
      <div className="sticky top-[100px] flex flex-col gap-[24px] items-start self-start pb-[100px] w-full">
        <EarlyBirdSoloPresenter />
        <div className="w-full flex flex-col gap-2">
          <p className="text-[#64748b] text-[13px] text-center">Need help? <a href="#" className="text-[#013af5] font-bold hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}

function Main({ isOn, setIsOn, activeTab, setTab, phase, setSetPhase }: { isOn: boolean; setIsOn: (val: boolean) => void; activeTab: string; setTab: (t: string) => void; phase: string; setSetPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] justify-center relative shrink-0 w-full px-6 lg:px-0 mt-6 lg:mt-8 pb-12" data-name="Main">
      <Container11 isOn={isOn} activeTab={activeTab} setTab={setTab} phase={phase} setPhase={setSetPhase} />
      <Container46 />
    </div>
  );
}


function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[30px] relative shrink-0 w-full overflow-hidden" data-name="Footer">
      <div className="relative shrink-0 w-full max-w-[1168px] px-6" data-name="image 4">
        {/* Desktop version */}
        <img alt="" className="hidden lg:block w-full h-auto object-contain" src={imgImage4} />
        {/* Mobile version */}
        <img alt="" className="block lg:hidden w-full h-auto object-contain px-4" src={imgMobilFooter} />
      </div>
    </div>
  );
}


function MobileFooter({ isOn, setIsOn, activeTab, setTab, phase }: { isOn: boolean; setIsOn: (val: boolean) => void; activeTab: string; setTab: (t: string) => void; phase: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';
  let price = activeTab === 'team' ? (isLastChance ? 992.28 : (isRegular ? 982.28 : 917.78)) : (isLastChance ? 135.00 : (isRegular ? 125.00 : 110.00));
  const finalPrice = isOn ? (price * 1.08136) : price;
  const priceStr = `$${finalPrice.toFixed(2)}`;
  let registrationText = "Per Player  ·  Early Bird Price Ends 12/12";
  if (isLastChance) {
    registrationText = "Per Player  ·  Registration Ends 12/26";
  } else if (isRegular) {
    registrationText = "Per Player  ·  Price Ends 01/12";
  }
  const tabInfo = {
    solo: "Volo finds you a team",
    friends: "Send unique link and sign up separately.",
    team: "Prepay for the whole roster"
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-1.5 max-w-lg mx-auto">
        {/* Tab Switcher */}
        <div className="flex flex-col gap-1">
          <div className="flex bg-[#f1f5f9] p-1.5 rounded-full">
            <button onClick={() => setTab('solo')} className={`flex-1 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${activeTab === 'solo' ? 'bg-white text-black shadow-sm' : 'text-[#64748b]'}`}>Solo</button>
            <button onClick={() => setTab('friends')} className={`flex-1 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${activeTab === 'friends' ? 'bg-white text-black shadow-sm' : 'text-[#64748b]'}`}>Friends</button>
            <button onClick={() => setTab('team')} className={`flex-1 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${activeTab === 'team' ? 'bg-white text-black shadow-sm' : 'text-[#64748b]'}`}>Team</button>
          </div>
          <p className="text-center text-[13px] font-['VoloSansPro'] font-medium text-[#64748b]">
            {tabInfo[activeTab as keyof typeof tabInfo]}
          </p>
        </div>

        {/* Price and Register Row */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-extrabold font-['VoloSansPro'] text-black tracking-tight">{priceStr}</span>
              <button
                onClick={() => setIsOn(!isOn)}
                className="text-[13px] text-[#013AF5] font-['VoloSansPro'] font-bold underline underline-offset-2 active:opacity-60 transition-opacity"
              >
                {isOn ? "Hide fees" : "Show fees"}
              </button>
            </div>
            <span className="text-[13px] font-['VoloSansPro'] font-medium text-[#64748b]">
              {registrationText}
            </span>
          </div>

          <button className="bg-[#013AF5] text-white px-10 py-3.5 rounded-[14px] font-bold text-[16px] shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

function HowYoullPlay() {
  return (
    <div className="bg-[#0034DC] w-full py-16 lg:py-24 relative overflow-hidden" data-name="How You'll Play" id="how-you-play">
      <div className="mx-auto max-w-6xl px-6 w-full flex flex-col items-center relative">
        <h2 className="text-white text-4xl font-bold font-['VoloSansPro'] uppercase mb-16 lg:mb-[80px] tracking-wide text-center">How You'll Play</h2>

        {/* Relative container for the columns to anchor absolute arrows */}
        <div className="relative w-full flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch mt-4 lg:mt-0">

          {/* COMMITTED Annotation */}
          <div className="absolute -top-[55px] left-[5%] lg:left-[12%] flex items-center pointer-events-none z-10 hidden lg:flex">
            <span className="text-[#c7ff10] font-medium uppercase text-[18px] tracking-wide rotate-[-3deg] mr-[-8px]" style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}>Committed</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[20px]">
              <path d="M35 5 Q20 5, 8 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 22 L8 32 L15 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* CASUAL Annotation */}
          <div className="absolute -top-[55px] left-[50%] -translate-x-[40%] lg:translate-x-[20%] xl:translate-x-[45%] flex items-center justify-center pointer-events-none z-10 hidden lg:flex">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[15px] -mr-1">
              <path d="M35 15 Q20 10, 8 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 25 L8 35 L16 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#c7ff10] font-medium uppercase text-[18px] tracking-wide mx-2 rotate-[2deg]" style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}>Casual</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[15px] -ml-1">
              <path d="M5 15 Q20 10, 32 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 28 L32 35 L36 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Column 1: LEAGUES */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Leagues</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Weekly games and playoffs. Sign up solo, with friends, or a full team — we guarantee a game every week.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Sign up
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Column 2: DROP-INS */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Drop-ins</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Jump in for a single game. Try a new sport or join friends without the season-long commitment.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Find a drop-in
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Column 3: PICKUPS */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Pickups</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Just show up. We handle the teams and gear. Perfect for spontaneous play and packed schedules.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Find a pickup
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function MobileFixedNextButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-lg mx-auto">
        <button
          onClick={onClick}
          className="w-full bg-[#013af5] hover:bg-[#0034dc] text-white font-['VoloSansPro'] font-bold text-[16px] py-4 rounded-[16px] shadow-lg shadow-[#013af5]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Next
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function DailyPlayV() {
  const [isOn, setIsOn] = useState(false);
  const [tab, setTab] = useState("solo");
  const [phase, setPhase] = useState("early-bird");
  const [isMobileRegOpen, setIsMobileRegOpen] = useState(false);

  // Prevent background scrolling when modal is open and reset on desktop resize
  useEffect(() => {
    if (isMobileRegOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup if window is resized past lg breakpoint (1024px)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileRegOpen) {
        setIsMobileRegOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileRegOpen]);

  return (
    <div className="bg-[#f8fafc] flex flex-col items-center min-h-screen relative w-full font-['VoloSansPro'] pb-[90px] lg:pb-[100px]">
      <Nav />
      <div className="w-full max-w-[1168px] mt-[80px] lg:mt-[100px] px-0 lg:px-6">
        <Header />
        <Main isOn={isOn} setIsOn={setIsOn} activeTab={tab} setTab={setTab} phase={phase} setSetPhase={setPhase} />
      </div>
      <Footer />
      <MobileFixedNextButton onClick={() => setIsMobileRegOpen(true)} />

      {/* Mobile Registration Full Page Modal */}
      {isMobileRegOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f8fafc] flex flex-col lg:hidden animate-in slide-in-from-bottom-full duration-300">
          <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-[#e2e8f0] sticky top-0 z-10 shadow-sm">
            <button
              onClick={() => setIsMobileRegOpen(false)}
              className="p-2 -ml-2 rounded-full hover:bg-black/5 text-black"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <h2 className="font-['VoloSansPro'] font-bold text-[18px] text-black">Complete Registration</h2>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>
          <div className="flex-1 overflow-y-auto pb-[150px] bg-white">
            <EarlyBirdSoloPresenter />
          </div>
        </div>
      )}
    </div>
  );
}
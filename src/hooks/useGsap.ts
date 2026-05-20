import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useGsapTimeline = () => {
  useGSAP(() => {
    // Timeline animation
    const timeline = document.querySelector('.timeline') as HTMLElement;
    if (timeline) {
      const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];
      
      // Animate line progress (Only increases, never decreases!)
      gsap.to(timeline, {
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          onUpdate: (self) => {
            const currentProgress = self.progress * 100;
            const prevProgress = parseFloat(timeline.style.getPropertyValue('--line-progress') || '0');
            
            if (currentProgress > prevProgress) {
              timeline.style.setProperty('--line-progress', `${currentProgress}%`);
            }
          }
        }
      });

      // Animate each timeline item dot and content using native individual ScrollTriggers
      items.forEach(item => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');
        
        if (dot || content) {
          // Pre-hide items safely
          gsap.set(dot, { scale: 0, opacity: 0 });
          gsap.set(content, { y: 20, opacity: 0 });

          const tl = gsap.timeline({
            onComplete: () => {
              item.classList.add('visible');
              gsap.set([dot, content], { clearProps: "transform" });
            },
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // trigger when item top reaches 80% of viewport height
              toggleActions: "play none none none",
              once: true
            }
          });

          tl.to(dot, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" })
            .to(content, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.2");
        }
      });
    }

    // Fade ups - Trigger native CSS transition by adding class on scroll trigger
    const fadeUps = gsap.utils.toArray('[data-aos]') as HTMLElement[];
    fadeUps.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => el.classList.add('aos-animate'),
        once: true
      });
    });
  }, []);
};

export const useGsapTheme = () => {
  useGSAP(() => {
    const projectsSection = document.querySelector('#projects');
    const experienceSection = document.querySelector('#experience');
    
    if (projectsSection) {
      ScrollTrigger.create({
        trigger: projectsSection,
        start: "top 40%",
        end: "bottom center",
        onEnter: () => document.body.classList.add('section-dark'),
        onLeaveBack: () => document.body.classList.remove('section-dark'),
      });
    }

    if (experienceSection) {
      ScrollTrigger.create({
        trigger: experienceSection,
        start: "top 60%",
        onEnter: () => document.body.classList.remove('section-dark'),
        onLeaveBack: () => document.body.classList.add('section-dark'),
      });
    }
  }, []);
};


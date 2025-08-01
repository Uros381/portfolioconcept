import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Clock, value: '5+', label: 'Godina iskustva' },
    { icon: Users, value: '100+', label: 'Zadovoljnih klijenata' }, <div className="text-2xl">🚀</div>
    { icon: Award, value: '200+', label: 'Završenih projekata' },
    { icon: Palette, value: '∞', label: 'Kreativnih ideja' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            O meni
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Zdravo! Ja sam <span className="font-bold text-orange-500">Uroš Stojadinović</span>, 
                  grafički dizajner iz Srbije. Dizajnom se bavim više od 5 godina, sa iskustvom u radu za 
                  SAMP zajednice, online prodavnice i izradi vizit kartica. Specijalizovan sam za rad u 
                  Adobe Photoshop-u, gde kombinujem kreativnost i preciznost kako bih stvorio efektna 
                  vizuelna rešenja.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-red-500/20 dark:to-pink-500/20 p-6 rounded-2xl text-center border border-orange-200 dark:border-orange-800 hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
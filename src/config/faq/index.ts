export interface Question {
  question: string;
  answer: string;
  answerStyle: string;
  questionStyle: string;
  fontSizeScaling?: string;
}

export const questions: Question[] = [
  //{
   // question: 'What are the dates for HackNITR 7.0?',
   // answer:
   //   'HackNITR 7.0 will be held on 31st Oct 1st Nov and 2nd Nov 2025. We will be waiting for you with a warm welcome.\n',
   // answerStyle: 'h-35',
//  questionStyle: 'mb-25 -bottom-25',
    //fontSizeScaling: 'text-[clamp(.85rem,2vw,1rem)]',
  //},
  {
    question: "GİTBİ'ye nasıl katılabilirim?",
    answer:
      "Başvuru formunu doldurarak sürece başlayabilirsin. Başvurular değerlendirilir, uygun görülen adaylarla kısa bir tanışma görüşmesi yapılır. Seçim sürecinde aradığımız tek şey; fikir üretmeye ve sorumluluk almaya istekli olmak.\n",
    answerStyle: 'h-[15rem] md:h-56',
    questionStyle: 'mb-44 -bottom-44 md:mb-40 md:-bottom-40',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question: 'Kimler başvurabilir?',
    answer:
      'Fikri olan ama nasıl yapacağını bilmeyen, deneyimsiz ama öğrenmeye açık, bir şeyler yapmadan duramayan herkes başvurabilir. Tek şart: konfor alanını zorlamaya hazır olmak.',
    answerStyle: 'h-44 md:h-40',
    questionStyle: 'mb-32 -bottom-32 md:mb-28 md:-bottom-28',
    fontSizeScaling: 'text-[clamp(0.78rem,2vw,1rem)]',
  },
  {
    question: "GİTBİ'de neler yapılıyor?",
    answer:
      'Hackathonlar, girişim simülasyonları, networking etkinlikleri, vizyon buluşmaları ve workshop\'lar düzenliyoruz. ' +
      'Gerçek projelerle çalışır, deadline\'larla yaşar, sprint\'lerle ilerlersin. Teorik değil, tamamen pratik bir deneyim.',
    answerStyle: 'h-48',
    questionStyle: 'mb-36 -bottom-36',
    fontSizeScaling: 'text-[clamp(0.75rem,3vw,1rem)]',
  },
  {
    question: "Pasif üyelik mümkün mü?",
    answer:
      "GİTBİ'de pasif üyelik yoktur. Bahane yoktur. Sorumluluk almadan ilerleme yoktur. Burada herkes öğrenir, öğrendiğini uygular ve ürettiğiyle değer katar.",
    answerStyle: 'h-44 md:h-40',
    questionStyle: 'mb-32 -bottom-32 md:mb-28 md:-bottom-28',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question: "GİTBİ'den ne kazanırsım?",
    answer:
      "Diploma değil, deneyim ve network. Gerçek projeler, iş disiplini, sprint kültürü ve sektörün içindeki insanlarla bağlantı. " +
      "GİTBİ'de geçirdiğin her ay kariyerine somut katkı sağlar.",
    answerStyle: 'h-44',
    questionStyle: 'mb-32 -bottom-32',
    fontSizeScaling: 'text-[clamp(0.7rem,3.4vw,.9rem)]',
  },
  // {
  //   question: 'Will food be provided at the hackathon?',
  //   answer:
  //     'Of course!! Meals, water, snacks and most importantly- Coffee, will be provided FREE OF COST.',
  //   answerStyle: 'h-30',
  //   questionStyle: 'mb-22 -bottom-22',
  //   fontSizeScaling: 'text-[clamp(0.85rem,3vw,1rem)]',
  // },
];

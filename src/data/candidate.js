// ─────────────────────────────────────────────────────────────
// ALL CANDIDATE CONTENT LIVES HERE. Every text has an Arabic
// ("ar") and a French ("fr") version. Image paths are relative
// to the /public folder (no leading slash, forward slashes only).
//
// Optional blocks — add them back to show the matching section:
//   wilaya, gallery, residence (approved: true), contact.phone
// ─────────────────────────────────────────────────────────────
export const candidate = {
  name: { ar: 'المترشح حمودي صالح', fr: 'Candidat Hammoudi Salah' },
  photo: 'images/candidate/photo_2026-11-09_00-08-02.jpg',
  tagline: {
    ar: 'معًا نبني بلديتنا من أجل الجميع',
    fr: 'Ensemble, construisons une commune pour tous',
  },

  // Two separate numbers — never merge them.
  listNumber: '2',        // رقم القائمة — identifies the electoral list
  candidateNumber: '01',  // رقم المترشح — identifies the individual candidate

  biography: {
    ar: [
      'وُلد المترشح حمودي صالح وترعرع في بلدية أولاد رحمون، وهو ملتزم بالعمل الجمعوي والشأن المحلي منذ سنوات.',
      'يؤمن بأن التسيير المحلي الجيد يبدأ بالإصغاء إلى المواطنين وبالشفافية في اتخاذ القرار.',
    ],
    fr: [
      'Le candidat Hammoudi Salah est né et a grandi dans la commune d’Ouled Rahmoun, et s’engage dans la vie associative et locale depuis des années.',
      'Il croit qu’une bonne gestion locale commence par l’écoute des citoyens et la transparence des décisions.',
    ],
  },
  education: [
    {
      title: { ar: 'دراسات عليا في الفيزياء الصلبة', fr: 'Études supérieures en physique du solide' },
    },
    {
      period: '2006 – 2017',
      title: { ar: 'أستاذ مادة الفيزياء', fr: 'Professeur de physique' },
      place: {
        ar: 'التدريس في بلدية أولاد رحمون في عدة مؤسسات',
        fr: 'Enseignement dans plusieurs établissements de la commune d’Ouled Rahmoun',
      },
    },
  ],
  experience: [
    {
      title: { ar: 'مدير متوسطة', fr: 'Directeur de CEM (collège d’enseignement moyen)' },
      place: { ar: 'متوسطة ابن سينا — الكلم الرابع', fr: 'CEM Ibn Sina — 4ᵉ kilomètre' },
    },
    {
      title: { ar: 'عضو المجلس الشعبي الولائي', fr: 'Membre de l’Assemblée populaire de wilaya (APW)' },
      place: {
        ar: 'عضو في لجنة التربية ولجنة الفلاحة',
        fr: 'Membre de la commission de l’éducation et de la commission de l’agriculture',
      },
    },
  ],

  party: {
    name: { ar: 'التجمع الوطني الديمقراطي', fr: 'Rassemblement national démocratique (RND)' },
    logo: 'images/party/images.png',
    description: {
      ar: 'التجمع الوطني الديمقراطي (RND) هو حزب سياسي جزائري، تأسس يوم 21 فيفري 1997. يعلن الحزب أن مرجعيته تقوم على احترام الدستور وقوانين الجمهورية. ومن المحاور التي يطرحها الحزب في خطابه: التنمية الاقتصادية، تحسين الخدمات العمومية، دعم الشباب، وتطوير الجماعات المحلية.',
      fr: 'Le Rassemblement national démocratique (RND) est un parti politique algérien, fondé le 21 février 1997. Il se réclame du respect de la Constitution et des lois de la République. Parmi ses thèmes de prédilection figurent le développement économique, l’amélioration des services publics, le soutien à la jeunesse et le développement des collectivités locales.',
    },
    values: [
      { ar: 'الشفافية', fr: 'Transparence' },
      { ar: 'القرب من المواطن', fr: 'Proximité' },
      { ar: 'التنمية المستدامة', fr: 'Développement durable' },
    ],
  },

  municipality: {
    name: { ar: 'بلدية أولاد رحمون', fr: 'Commune d’Ouled Rahmoun' },
    photo: 'images/municipality/images.jpg',
    description: {
      ar: 'تعتبر بلدية أولاد رحمون إحدى البلديات التابعة لدائرة الخروب في ولاية قسنطينة بالجزائر.',
      fr: 'La commune d’Ouled Rahmoun est l’une des communes de la daïra d’El Khroub, dans la wilaya de Constantine, en Algérie.',
    },
    stats: [
      { label: { ar: 'السكان', fr: 'Habitants' }, value: '31 000' },
      { label: { ar: 'المساحة', fr: 'Superficie' }, value: '209 km²' },
      { label: { ar: 'الأحياء', fr: 'Quartiers' }, value: '11' },
    ],
  },

  social: {
    facebook: 'https://www.facebook.com/share/1DVV58FESw/',
  },
  contact: {
    email: 'salahhammoudi87@gmail.com',
    office: {
      ar: 'مقر الحملة (أولاد رحمون — المحطة)',
      fr: 'Permanence de campagne (Ouled Rahmoun — gare)',
    },
  },
};

// FUTURE proposals (electoral program) + commitment tracking. Placeholder data.
// icon must be one of: GraduationCap, HeartPulse, Leaf, Bus, Users, Building2
export const program = [
  {
    id: 'education', icon: 'GraduationCap',
    title: { ar: 'التعليم والشباب', fr: 'Éducation et jeunesse' },
    items: {
      ar: ['تحسين محيط المدارس', 'دعم النقل المدرسي', 'فضاءات للشباب'],
      fr: ['Améliorer les abords des écoles', 'Soutenir le transport scolaire', 'Créer des espaces pour les jeunes'],
    },
  },
  {
    id: 'health', icon: 'HeartPulse',
    title: { ar: 'الصحة والخدمات الاجتماعية', fr: 'Santé et action sociale' },
    items: {
      ar: ['مرافقة الفئات الهشة', 'تحسين استقبال المواطنين', 'حملات توعية'],
      fr: ['Accompagner les publics fragiles', 'Améliorer l’accueil des citoyens', 'Organiser des campagnes de sensibilisation'],
    },
  },
  {
    id: 'environment', icon: 'Leaf',
    title: { ar: 'البيئة والإطار المعيشي', fr: 'Environnement et cadre de vie' },
    items: {
      ar: ['تحسين جمع النفايات', 'مساحات خضراء', 'إنارة الأحياء'],
      fr: ['Améliorer la collecte des déchets', 'Créer des espaces verts', 'Éclairer les quartiers'],
    },
  },
  {
    id: 'roads', icon: 'Bus',
    title: { ar: 'الطرق والنقل', fr: 'Routes et transport' },
    items: {
      ar: ['صيانة الطرق', 'تهيئة الأرصفة', 'تحسين حركة المرور'],
      fr: ['Entretenir les routes', 'Aménager les trottoirs', 'Fluidifier la circulation'],
    },
  },
  {
    id: 'participation', icon: 'Users',
    title: { ar: 'التسيير والمشاركة', fr: 'Gouvernance et participation' },
    items: {
      ar: ['نشر قرارات المجلس', 'لقاءات دورية مع المواطنين', 'تبسيط الإجراءات'],
      fr: ['Publier les décisions du conseil', 'Tenir des rencontres régulières avec les citoyens', 'Simplifier les démarches'],
    },
  },
  {
    id: 'economy', icon: 'Building2',
    title: { ar: 'الاقتصاد المحلي', fr: 'Économie locale' },
    items: {
      ar: ['دعم الحرفيين والتجار', 'تنظيم الأسواق', 'مرافقة المشاريع الصغيرة'],
      fr: ['Soutenir artisans et commerçants', 'Organiser les marchés', 'Accompagner les petits projets'],
    },
  },
];

// status: 'planned' | 'inProgress' | 'done'. progress: 0–100.
// Update these after the election to show real progress.
export const commitments = [
  { id: 'c1', title: { ar: 'نشر ميزانية البلدية سنويًا', fr: 'Publier chaque année le budget communal' }, status: 'planned', progress: 0 },
  { id: 'c2', title: { ar: 'لقاء شهري مع سكان الأحياء', fr: 'Rencontre mensuelle avec les habitants des quartiers' }, status: 'planned', progress: 0 },
  { id: 'c3', title: { ar: 'خطة صيانة الإنارة العمومية', fr: 'Plan d’entretien de l’éclairage public' }, status: 'planned', progress: 0 },
];

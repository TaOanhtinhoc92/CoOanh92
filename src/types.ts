export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced';

export type ActivityTab = 
  | 'khoiDong' 
  | 'khamPha' 
  | 'thaoLuan' 
  | 'luyenTap' 
  | 'thucHanh' 
  | 'vanDung' 
  | 'ghiNho' 
  | 'cungCo'
  | 'giaoAn';

export type PedagogicalPhase =
  | 'khoi_dong'
  | 'kham_pha'
  | 'thao_luan'
  | 'luyen_tap'
  | 'thuc_hanh'
  | 'van_dung'
  | 'ghi_nho'
  | 'giao_an';

export interface KhoiDongData {
  title: string;
  type: 'question' | 'image_guess' | 'quick_quiz' | 'true_false';
  question: string;
  imageHint?: string;
  options?: string[];
  correctAnswer?: number | string;
  isCorrect?: boolean;
  explanation?: string;
  leadIn: string; // Lời dẫn vào bài học
  situation?: string;
}

export type KhoiDongPhase = KhoiDongData;

export interface KhamPhaItem {
  id: string;
  title: string;
  task: string; // Nhiệm vụ SGK
  context?: string; // Dẫn nhập / hình ảnh SGK
  guidingQuestions: string[]; // Câu hỏi gợi mở chia nhỏ
  hiddenAnswer: string; // Đáp án ẩn
  teacherConclusion: string; // GIÁO VIÊN CHỐT KIẾN THỨC
}

export interface KhamPhaPhase {
  title: string;
  tasks?: string[];
  questions?: string[];
  contentDetails?: string[];
  conclusion?: string;
}

export interface ThaoLuanData {
  title: string;
  groupTask: string;
  durationMinutes: number;
  guidingPrompts: string[];
  suggestedHints: string[];
  conclusion: string;
  topic?: string;
  groupSize?: string;
  question?: string;
  timeMinutes?: number;
  guidingHints?: string[];
  expectedOutput?: string;
}

export type ThaoLuanPhase = ThaoLuanData;

export interface McqLuyenTap {
  id: string;
  type: 'mcq';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: DifficultyLevel;
}

export type MultipleChoiceExercise = McqLuyenTap;

export interface TrueFalseLuyenTap {
  id: string;
  type: 'true_false';
  statement: string;
  isCorrect: boolean;
  explanation: string;
  difficulty?: DifficultyLevel;
}

export type TrueFalseExercise = TrueFalseLuyenTap;

export interface CategorizeLuyenTap {
  id: string;
  type: 'categorize';
  instruction: string;
  categories: { id: string; name: string }[];
  items: { id: string; text: string; correctCategoryId: string }[];
  difficulty?: DifficultyLevel;
}

export type CategorizeExercise = CategorizeLuyenTap;

export interface MatchingLuyenTap {
  id: string;
  type: 'matching';
  instruction: string;
  leftItems: { id: string; text: string }[];
  rightItems: { id: string; text: string }[];
  correctPairs: { leftId: string; rightId: string }[];
  difficulty?: DifficultyLevel;
}

export type MatchingExercise = MatchingLuyenTap;

export interface OrderLuyenTap {
  id: string;
  type: 'order';
  instruction: string;
  items: { id: string; text: string }[];
  correctOrder: string[]; // array of item ids in correct sequence
  difficulty?: DifficultyLevel;
}

export type OrderExercise = OrderLuyenTap;

export interface ImageSelectLuyenTap {
  id: string;
  type: 'image_select';
  question: string;
  options: { id: string; label: string; iconName?: string; isCorrect: boolean; reason: string }[];
  difficulty?: DifficultyLevel;
}

export type ImageSelectExercise = ImageSelectLuyenTap;

export interface FillBlankLuyenTap {
  id: string;
  type: 'fill_blank';
  instruction: string;
  sentenceBefore: string;
  sentenceAfter: string;
  correctWords: string[]; // acceptable answers
  hint?: string;
  difficulty?: DifficultyLevel;
}

export type LuyenTapItem = 
  | McqLuyenTap 
  | TrueFalseLuyenTap 
  | CategorizeLuyenTap 
  | MatchingLuyenTap 
  | OrderLuyenTap 
  | ImageSelectLuyenTap 
  | FillBlankLuyenTap;

export interface LuyenTapPhase {
  title: string;
  exercises: LuyenTapItem[];
}

export interface ThucHanhData {
  title: string;
  objective?: string;
  materials?: (string | { name: string; quantity: string; note?: string })[];
  steps: (string | {
    stepNumber: number;
    title: string;
    description: string;
    details: string[];
    safetyTip?: string;
  })[];
  evaluationCriteria?: {
    name: string;
    description: string;
  }[];
  rubric?: string[];
  safetyNote?: string;
}

export type ThucHanhPhase = ThucHanhData;

export interface VanDungData {
  title: string;
  scenario: string;
  question?: string;
  options?: {
    label: string;
    text: string;
    isOptimal: boolean;
    feedback: string;
  }[];
  teacherExplanation?: string;
  situation?: string;
  task?: string;
  guidance?: string;
}

export type VanDungPhase = VanDungData;

export interface MindmapBranch {
  label: string;
  color?: string;
  items: string[];
}

export interface GhiNhoData {
  mainTitle?: string;
  summaryQuote?: string;
  branches?: MindmapBranch[];
  sgkNote?: string;
  summaryTitle?: string;
  keyPoints?: string[];
  quickCheck?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export type GhiNhoPhase = GhiNhoData;

export interface CungCoQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TeacherGuide {
  objectives: string[];
  keyKnowledge: string[];
  estimatedMinutes: number;
  methodologyTips: string[];
  equipmentNeeded: string[];
  quickAnswers: { question: string; answer: string }[];
}

export interface LessonPeriod {
  id: string;
  periodNumber: number; // 1 to 35
  lessonId: string;
  periodInLesson: number; // e.g. 1 of 3
  totalPeriodsInLesson: number;
  title: string;
  focusContent: string;
  sgkPages: string;
  khoiDong: KhoiDongData;
  khamPha: KhamPhaItem[] | any;
  thaoLuan?: ThaoLuanData | any;
  luyenTap: LuyenTapItem[] | any;
  thucHanh?: ThucHanhData;
  vanDung: VanDungData | any;
  ghiNho: GhiNhoData | any;
  cungCo?: CungCoQuestion[];
  teacherGuide?: TeacherGuide;
  pedagogicalObjectives?: string[];
  subTopic?: string;
}

export interface Lesson {
  id: string;
  number: number | string; // 1 to 9, or 'ĐG1', 'ĐG2', etc.
  title: string;
  partId: string;
  partTitle: string;
  totalPeriods: number;
  periods: LessonPeriod[];
  sgkPages: string;
  isEvaluation?: boolean;
  topic?: string;
  part?: number;
  pageRange?: string;
}

export interface CurriculumPart {
  id: string;
  title: string;
  romanNumeral: string;
  description: string;
  lessons: Lesson[];
}

export interface TeachingProgressRecord {
  periodNumber: number;
  status: 'completed' | 'in_progress' | 'not_started';
  lastTaughtDate?: string;
  quizScore?: number;
  notes?: string;
}

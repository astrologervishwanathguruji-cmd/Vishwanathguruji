import type { IconSvgElement } from '@hugeicons/react';
import {
  Activity01Icon,
  Alert02Icon,
  Baby01Icon,
  Briefcase01Icon,
  Building02Icon,
  ChartDownIcon,
  Clock01Icon,
  Compass01Icon,
  HandHelpingIcon,
  HeartAddIcon,
  HeartbreakIcon,
  Home01Icon,
  JudgeIcon,
  JusticeScale01Icon,
  LandmarkIcon,
  Moon01Icon,
  RupeeIcon,
  Shield01Icon,
  SparklesIcon,
  UserCheck01Icon,
  UserGroupIcon,
  UserMinus01Icon,
} from '@hugeicons/core-free-icons';

/** Maps `Service.icon` / `whySeek.icon` string keys (legacy Lucide names) to Hugeicons stroke icons. */
const SERVICE_ICON_MAP: Record<string, IconSvgElement> = {
  Shield: Shield01Icon,
  AlertTriangle: Alert02Icon,
  HeartCrack: HeartbreakIcon,
  TrendingDown: ChartDownIcon,
  Moon: Moon01Icon,
  Heart: HeartAddIcon,
  HeartHandshake: HandHelpingIcon,
  Users: UserGroupIcon,
  UserCheck: UserCheck01Icon,
  Sparkles: SparklesIcon,
  Home: Home01Icon,
  Compass: Compass01Icon,
  Building2: Building02Icon,
  Briefcase: Briefcase01Icon,
  Baby: Baby01Icon,
  Activity: Activity01Icon,
  UserX: UserMinus01Icon,
  Scale: JusticeScale01Icon,
  Gavel: JudgeIcon,
  IndianRupee: RupeeIcon,
  Landmark: LandmarkIcon,
  Clock: Clock01Icon,
};

export function getServiceIconByKey(key: string): IconSvgElement {
  return SERVICE_ICON_MAP[key] ?? SparklesIcon;
}

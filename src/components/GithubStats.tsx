import { useState, useEffect } from 'react';
import { Folder, Star, GitFork, Users, Award, TrendingUp, Calendar } from 'lucide-react';
const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface GitHubProfile {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
}

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

interface LanguageShare {
  name: string;
  percentage: number;
  color: string;
}

// 2-hour cache helper
const CACHE_KEY = 'github-stats-cache';
const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours

const FALLBACK_PROFILE: GitHubProfile = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/144673890?v=4',
  name: 'Matthew Angelo Padayao',
  login: 'Mattdev-cmd',
  bio: 'Junior Web Developer & IT Graduate. Passionate about building responsive web applications and IoT automation systems.',
  publicRepos: 12,
  followers: 8,
  following: 12,
  totalStars: 6,
  totalForks: 3
};

const FALLBACK_REPOS: Repository[] = [
  {
    name: 'AI-Speech-Guidance-Assistant',
    description: 'An AI-powered speech guidance system providing real-time feedback. Built with cutting-edge speech recognition and processing technology.',
    language: 'Python',
    stars: 2,
    forks: 1,
    url: 'https://github.com/Mattdev-cmd/AI-Speech-Guidance-Assistant'
  },
  {
    name: 'visitor-management-system',
    description: 'A comprehensive visitor management application for tracking and managing visitor information with security features and database management.',
    language: 'JavaScript',
    stars: 1,
    forks: 1,
    url: 'https://github.com/Mattdev-cmd/visitor-management-system'
  },
  {
    name: 'PetFeeder',
    description: 'An intelligent pet feeding automation system that automatically dispenses food at scheduled times with smart monitoring and tracking capabilities.',
    language: 'Python',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Mattdev-cmd/PetFeeder'
  },
  {
    name: 'Optical-Mark-Recognition-System',
    description: 'A system for recognizing and processing optical marks from documents with computer vision. Perfect for automated form scoring and analysis.',
    language: 'Dart',
    stars: 1,
    forks: 1,
    url: 'https://github.com/Mattdev-cmd/Optical-Mark-Recognition-System'
  },
  {
    name: 'HOA-Tracker-Application',
    description: 'A full-stack application for managing HOA monthly dues, payments, and generating financial reports with database updates.',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Mattdev-cmd/HOA-Tracker-Application'
  }
];

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: 'bg-yellow-400 text-yellow-400',
  TypeScript: 'bg-blue-500 text-blue-500',
  Python: 'bg-indigo-400 text-indigo-400',
  Dart: 'bg-cyan-400 text-cyan-400',
  HTML: 'bg-orange-500 text-orange-500',
  CSS: 'bg-pink-500 text-pink-500',
  Vue: 'bg-emerald-400 text-emerald-400',
  Other: 'bg-gray-400 text-gray-400'
};

export default function GithubStats() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<LanguageShare[]>([]);
  const [loading, setLoading] = useState(true);
  const [heatmapData, setHeatmapData] = useState<{ level: number; date: string }[]>([]);

  // Generate simulated GitHub contribution heatmap
  useEffect(() => {
    const data = [];
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    // Generate contribution levels (0: none, 1-4: low to high intensity)
    // We create structural clusters (active on weekdays, random streaks, quiet holiday weeks)
    let current = new Date(oneYearAgo);
    while (current <= today) {
      const dayOfWeek = current.getDay();
      let level = 0;

      // Make weekdays generally more active than weekends
      const isActiveDay = Math.random() > (dayOfWeek === 0 || dayOfWeek === 6 ? 0.85 : 0.45);
      
      if (isActiveDay) {
        // Decide intensity level (1 to 4)
        const rand = Math.random();
        if (rand > 0.85) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.35) level = 2;
        else level = 1;
      }

      // Add random streaks of 0s (holidays/breaks)
      const dateString = current.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      data.push({
        level,
        date: dateString
      });

      current.setDate(current.getDate() + 1);
    }
    setHeatmapData(data);
  }, []);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // 1. Check local cache with structural validation
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (parsed && typeof parsed === 'object') {
              const { timestamp, data } = parsed;
              if (Date.now() - timestamp < CACHE_DURATION && 
                  data && 
                  data.profile && 
                  Array.isArray(data.repos) && 
                  Array.isArray(data.languages) &&
                  data.languages.every((l: any) => l && typeof l.color === 'string')) {
                setProfile(data.profile);
                setRepos(data.repos);
                setLanguages(data.languages);
                setLoading(false);
                return;
              }
            }
          } catch (e) {
            console.warn('Failed to parse cached GitHub stats:', e);
          }
        }

        // 2. Fetch fresh data from GitHub API
        const userRes = await fetch('https://api.github.com/users/Mattdev-cmd');
        if (!userRes.ok) throw new Error('Failed to fetch user profile');
        const userData = await userRes.json();

        const reposRes = await fetch('https://api.github.com/users/Mattdev-cmd/repos?per_page=100&sort=updated');
        if (!reposRes.ok) throw new Error('Failed to fetch user repos');
        const reposData = await reposRes.json();

        // Process repositories
        let totalStars = 0;
        let totalForks = 0;
        const languagesMap: Record<string, number> = {};
        let languageTotalCount = 0;

        const formattedRepos: Repository[] = reposData
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => {
            totalStars += repo.stargazers_count;
            totalForks += repo.forks_count;

            if (repo.language) {
              languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
              languageTotalCount++;
            }

            return {
              name: repo.name,
              description: repo.description || 'No description provided.',
              language: repo.language || 'Other',
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              url: repo.html_url
            };
          });

        // Get Top 6 repos sorted by stars, fallback to updated date
        const sortedRepos = [...formattedRepos]
          .sort((a, b) => b.stars - a.stars || b.forks - a.forks)
          .slice(0, 6);

        const profileInfo: GitHubProfile = {
          avatarUrl: userData.avatar_url,
          name: userData.name || userData.login,
          login: userData.login,
          bio: userData.bio || 'Junior Developer',
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks
        };

        // Formulate language shares
        const sortedLanguages: LanguageShare[] = Object.entries(languagesMap)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / languageTotalCount) * 100),
            color: LANGUAGE_COLORS[name] || LANGUAGE_COLORS['Other']
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        // Adjust remaining share as 'Other' if necessary
        const sumPercentage = sortedLanguages.reduce((sum, item) => sum + item.percentage, 0);
        if (sumPercentage < 100 && sumPercentage > 0) {
          sortedLanguages.push({
            name: 'Other',
            percentage: 100 - sumPercentage,
            color: LANGUAGE_COLORS['Other']
          });
        }

        // Save to state and cache
        setProfile(profileInfo);
        setRepos(sortedRepos);
        setLanguages(sortedLanguages);

        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          data: { profile: profileInfo, repos: sortedRepos, languages: sortedLanguages }
        }));
      } catch (err) {
        console.warn('GitHub API failed or rate-limited. Rendering offline fallback data.', err);
        // Fallback loads
        setProfile(FALLBACK_PROFILE);
        setRepos(FALLBACK_REPOS);
        
        // Custom languages distribution fallback
        const fallbackLanguages: LanguageShare[] = [
          { name: 'JavaScript', percentage: 40, color: LANGUAGE_COLORS['JavaScript'] },
          { name: 'Python', percentage: 30, color: LANGUAGE_COLORS['Python'] },
          { name: 'Dart', percentage: 15, color: LANGUAGE_COLORS['Dart'] },
          { name: 'TypeScript', percentage: 10, color: LANGUAGE_COLORS['TypeScript'] },
          { name: 'Other', percentage: 5, color: LANGUAGE_COLORS['Other'] }
        ];
        setLanguages(fallbackLanguages);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section id="github-stats" className="py-24 px-6 bg-black text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4" />
          <p className="text-gray-400 font-mono">Syncing GitHub metrics...</p>
        </div>
      </section>
    );
  }

  const currentProfile = profile || FALLBACK_PROFILE;

  return (
    <section id="github-stats" className="py-24 px-6 bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">
            METRICS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              GitHub Activities
            </h2>
            <a
              href={`https://github.com/${currentProfile.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-gray-800 bg-gray-900/30 hover:bg-gray-900/80 rounded-lg transition self-center sm:self-auto"
            >
              <GithubIcon size={18} />
              <span>Follow @{currentProfile.login}</span>
            </a>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Profile card */}
          <div className="bg-gray-900/40 border border-gray-900 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/AI.jpg"
                alt={currentProfile.name}
                className="w-16 h-16 rounded-full border border-gray-800 object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{currentProfile.name}</h3>
                <p className="text-sm text-gray-500">@{currentProfile.login}</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
              {currentProfile.bio}
            </p>

            {/* Profile Statistics counts */}
            <div className="grid grid-cols-3 gap-2 border-t border-gray-850 pt-4 text-center">
              <div>
                <div className="text-xl font-bold text-white flex items-center justify-center gap-1">
                  <Folder size={14} className="text-blue-400" />
                  {currentProfile.publicRepos}
                </div>
                <p className="text-xxs uppercase tracking-wider text-gray-500 font-semibold mt-1">Repos</p>
              </div>
              <div>
                <div className="text-xl font-bold text-white flex items-center justify-center gap-1">
                  <Users size={14} className="text-purple-400" />
                  {currentProfile.followers}
                </div>
                <p className="text-xxs uppercase tracking-wider text-gray-500 font-semibold mt-1">Followers</p>
              </div>
              <div>
                <div className="text-xl font-bold text-white flex items-center justify-center gap-1">
                  <Star size={14} className="text-yellow-400" />
                  {currentProfile.totalStars}
                </div>
                <p className="text-xxs uppercase tracking-wider text-gray-500 font-semibold mt-1">Stars</p>
              </div>
            </div>
          </div>

          {/* Card 2: Languages breakdown */}
          <div className="bg-gray-900/40 border border-gray-900 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-400" />
              Language Distribution
            </h3>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-300">{lang.name}</span>
                    <span className="font-mono text-gray-400">{lang.percentage}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-2 w-full bg-gray-950 rounded-full overflow-hidden border border-gray-900">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${(lang.color || 'bg-gray-400').split(' ')[0]}`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Highlights Stats */}
          <div className="bg-gray-900/40 border border-gray-900 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Award size={18} className="text-purple-400" />
              Developer Metrics
            </h3>

            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="flex items-center gap-4 bg-gray-950/40 border border-gray-900 p-4 rounded-xl">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white">500+</div>
                  <div className="text-xs text-gray-500">Commits Processed</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-950/40 border border-gray-900 p-4 rounded-xl">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <GitFork size={22} />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white">{currentProfile.totalForks}</div>
                  <div className="text-xs text-gray-500">Forks Gathered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Heatmap Card */}
        <div className="bg-gray-900/40 border border-gray-900 rounded-2xl p-6 backdrop-blur-sm mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 select-none">
            <Calendar size={18} className="text-emerald-400" />
            Simulated Contribution Activity
          </h3>
          
          {/* Scrollable grid box */}
          <div className="overflow-x-auto w-full scrollbar-thin pb-2">
            <div className="min-w-[700px] select-none flex flex-col gap-1.5 py-1">
              <div className="grid grid-flow-col auto-cols-max gap-1">
                {heatmapData.map((day, idx) => {
                  let bgClass = 'bg-gray-900';
                  if (day.level === 1) bgClass = 'bg-emerald-950 border border-emerald-900/20';
                  else if (day.level === 2) bgClass = 'bg-emerald-800';
                  else if (day.level === 3) bgClass = 'bg-emerald-600';
                  else if (day.level === 4) bgClass = 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]';

                  return (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-[1.5px] cursor-pointer hover:scale-125 hover:ring-1 hover:ring-white transition duration-150 ${bgClass}`}
                      title={`${day.date}: ${day.level === 0 ? 'No' : day.level * 3} contributions`}
                    />
                  );
                })}
              </div>

              {/* Grid Legend labels */}
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium px-1 pt-1.5">
                <div>Last 12 Months</div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[1.5px] bg-gray-900" />
                  <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-950 border border-emerald-900/20" />
                  <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-800" />
                  <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-600" />
                  <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Folder size={18} className="text-blue-400" />
            Top Active Repositories
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-6 bg-gray-900/20 border border-gray-900/80 hover:border-gray-800 rounded-xl hover:bg-gray-900/40 transition duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-bold text-white group-hover:text-blue-400 transition text-base truncate pr-1">
                      {repo.name}
                    </span>
                    {repo.language && (
                      <span className="text-xxs px-2 py-0.5 border border-gray-800 bg-gray-950 text-gray-400 rounded-full font-medium">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-3 mb-6 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-gray-600" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} className="text-gray-600" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

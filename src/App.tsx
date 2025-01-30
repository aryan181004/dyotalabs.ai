import React, { useState } from 'react';
import { Mail, MapPin, BarChart2, Target, Users, GraduationCap, Calendar, IndianRupee , BookOpen, Award, Briefcase } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const tabs = ['Dashboard', 'Skills', 'Applications', 'Education', 'Analytics'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Skills':
        return (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Skill Assessment</h2>
            {[
              { name: 'JavaScript', level: '90%' },
              { name: 'React', level: '80%' },
              { name: 'Node.js', level: '90%' },
              { name: 'Python', level: '85%' },
              { name: 'SQL', level: '85%' }
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-gray-900 rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      case 'Applications':
        return (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Job Applications</h2>
            <div className="space-y-6">
              {[
                {
                  role: 'Senior Developer',
                  company: 'Tech Giants Inc',
                  salary: '840k-860k',
                  date: '2024-02-15',
                  status: 'Interview Scheduled'
                },
                {
                  role: 'Lead Developer',
                  company: 'Innovation Labs',
                  salary: '830k-850k',
                  date: '2024-02-10',
                  status: 'Application Submitted'
                }
              ].map((job, index) => (
                <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.role}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full w-fit">
                      {job.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <IndianRupee  className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Education':
        return (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Education History</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  degree: 'Bachelor of Engineering, Information Technology',
                  school: 'Pune Institute of Computer Technology',
                  period: '2022-2026',
                  gpa: '9.41/10.0'
                },
                {
                  degree: 'HSC',
                  school: 'Global Public School & Junior College',
                  period: '2020-2022',
                  gpa: '8.75/10.0'
                },
                {
                  degree: 'ICSE',
                  school: 'Ryan International School',
                  period: '2010-2020',
                  gpa: '9.55/10.0'
                }
              ].map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-100">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Analytics':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Profile Performance</h2>
              {[
                { label: 'Profile Views', value: '90%' },
                { label: 'Application Success', value: '75%' },
                { label: 'Interview Rate', value: '85%' },
                { label: 'Skill Match', value: '82%' }
              ].map((metric, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{metric.label}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-gray-900 rounded-full"
                      style={{ width: metric.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Suggested Actions</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg text-blue-700">
                  <BookOpen className="w-5 h-5 flex-shrink-0" />
                  <span>Complete your skill assessments</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg text-green-700">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  <span>Add recent certifications</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg text-purple-700">
                  <Briefcase className="w-5 h-5 flex-shrink-0" />
                  <span>Update work experience</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Profile Views',
                value: '245',
                icon: Users,
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              {
                title: 'Success Rate',
                value: '88%',
                icon: Target,
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600'
              },
              {
                title: 'Interview Rate',
                value: '75%',
                icon: BarChart2,
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">Aryan Chavan</h1>
              <p className="text-gray-600 mb-2">Full Stack Developer</p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">aryan2004.chavan@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Pune, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Profile Completion</h2>
          <div className="mb-2">
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div className="h-2 bg-gray-900 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">85% Complete</span>
          </div>
          <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition">
            Complete Profile
          </button>
        </div>

        {/* Navigation */}
        <div className="flex overflow-x-auto gap-2 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}

export default App;
"use client";

import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { toPersianNumber } from "@/utils/persianNumber";

interface Job {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  responsibilities: string;
}

const JobInformation = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const [formData, setFormData] = useState({
    organization: "",
    position: "",
    startDate: "",
    responsibilities: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date: any) => {
    if (date) {
      setFormData((prev) => ({
        ...prev,
        startDate: date.format ? date.format() : String(date),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        startDate: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingJob) {
      // Update existing job
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJob.id ? { ...formData, id: editingJob.id } : job
        )
      );
      setEditingJob(null);
    } else {
      // Add new job
      const newJob: Job = {
        id: Date.now().toString(),
        ...formData,
      };
      setJobs((prev) => [...prev, newJob]);
    }

    // Reset form
    setFormData({
      organization: "",
      position: "",
      startDate: "",
      responsibilities: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleEdit = (job: Job) => {
    setFormData({
      organization: job.organization,
      position: job.position,
      startDate: job.startDate,
      responsibilities: job.responsibilities,
    });
    setEditingJob(job);
    setShowForm(false); // Close the main form if open
  };

  const handleCancel = () => {
    setFormData({
      organization: "",
      position: "",
      startDate: "",
      responsibilities: "",
    });
    setEditingJob(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setEditingJob(null);
    setFormData({
      organization: "",
      position: "",
      startDate: "",
      responsibilities: "",
    });
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          اطلاعات شغلی یا کار فعلی
        </h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-lg">+</span>
          افزودن شغل
        </button>
      </div>

      {/* Display Jobs */}
      <div className="space-y-4 mb-6">
        {jobs.map((job, index) => (
          <div key={job.id} className="space-y-4">
            {/* Job Display Box */}
            {editingJob?.id !== job.id && (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 animate-fade-in">
                <div className="text-sm font-sahel font-medium text-gray-600 mb-3">
                  شغل فعلی {toPersianNumber(index + 1)}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">نام سازمان</div>
                    <div className="text-sm font-medium">
                      {job.organization}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">سمت</div>
                    <div className="text-sm font-medium">{job.position}</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">تاریخ شروع</div>
                    <div className="text-sm font-medium">{job.startDate}</div>
                  </div>
                  <div className="flex gap-2 items-center justify-end">
                    <button
                      onClick={() => handleEdit(job)}
                      className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm transform hover:scale-105 duration-200"
                    >
                      ویرایش
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm transform hover:scale-105 duration-200"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit Form - Shows right below the job being edited */}
            {editingJob?.id === job.id && (
              <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50 animate-slide-down">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-blue-800">
                    ویرایش شغل
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Section 1 - Organization, Position, Date */}
                    <div className="space-y-4">
                      {/* Organization Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          نام سازمان
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="نام سازمان را وارد کنید"
                          required
                        />
                      </div>

                      {/* Position and Start Date in one row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            سمت
                          </label>
                          <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="سمت خود را وارد کنید"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            تاریخ شروع فعالیت
                          </label>
                          <DatePicker
                            calendar={persian}
                            locale={persian_fa}
                            value={formData.startDate}
                            onChange={handleDateChange}
                            inputClass="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="تاریخ شروع را انتخاب کنید"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2 - Responsibilities */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        وظایف محوله
                      </label>
                      <textarea
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                        placeholder="وظایف محوله را شرح دهید"
                        required
                      />
                    </div>
                  </div>

                  {/* Section 3 - Submit Button */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
                    >
                      انصراف
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                    >
                      <span>✓</span>
                      بروزرسانی شغل
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Job Form */}
      {showForm && (
        <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50 animate-expand">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-800">
              افزودن شغل جدید
            </h3>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Section 1 - Organization, Position, Date */}
              <div className="space-y-4">
                {/* Organization Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام سازمان
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="نام سازمان را وارد کنید"
                    required
                  />
                </div>

                {/* Position and Start Date in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      سمت
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="سمت خود را وارد کنید"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تاریخ شروع فعالیت
                    </label>
                    <DatePicker
                      calendar={persian}
                      locale={persian_fa}
                      value={formData.startDate}
                      onChange={handleDateChange}
                      inputClass="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="تاریخ شروع را انتخاب کنید"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 - Responsibilities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وظایف محوله
                </label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="وظایف محوله را شرح دهید"
                  required
                />
              </div>
            </div>

            {/* Section 3 - Submit Button */}
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
              >
                <span>+</span>
                ثبت شغل
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: scaleY(1);
          }
        }
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.4s ease-out;
        }
        .animate-expand {
          animation: expand 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobInformation;

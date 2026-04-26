import React from 'react';

const CategoryLoadingPage = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-zinc-500 animate-pulse font-medium">
          Data লোড হচ্ছে, দয়া করে অপেক্ষা করুন...
        </p>
      </div>
    );
};

export default CategoryLoadingPage;
import React from 'react';
import { X, Check } from 'lucide-react';

export function ProblemSection() {
  return (
    <div className="bg-white rounded-3xl p-8 my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        The Problem with Regular Smartwatches
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Option
          title="Basic Smartwatches"
          cons={["Limited Features", "Poor Battery Life", "Unreliable"]}
        />
        
        <Option
          title="Premium Brands"
          cons={["Extremely Expensive", "Limited Compatibility", "Complex Setup"]}
        />
        
        <Option
          title="Series 9 Ultra"
          pros={["All Premium Features", "Affordable Price", "Easy to Use"]}
          highlight={true}
        />
      </div>
    </div>
  );
}

function Option({ title, pros, cons, highlight }: {
  title: string;
  pros?: string[];
  cons?: string[];
  highlight?: boolean;
}) {
  const bgColor = highlight ? 'bg-purple-50' : 'bg-gray-50';
  
  return (
    <div className={`${bgColor} p-6 rounded-xl`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {pros?.map((pro, index) => (
          <div key={index} className="flex items-center space-x-2 text-green-600">
            <Check className="w-5 h-5" />
            <span>{pro}</span>
          </div>
        ))}
        {cons?.map((con, index) => (
          <div key={index} className="flex items-center space-x-2 text-red-600">
            <X className="w-5 h-5" />
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
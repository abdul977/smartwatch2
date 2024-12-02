import React, { useState } from 'react';
import { useSiteConfig } from '../store/siteConfig';
import { useForm } from 'react-hook-form';
import { 
  Settings, Save, ArrowLeft, Video, Image, 
  ListChecks, MessageSquare, Star, Plus, Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState('general');
  const config = useSiteConfig();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      siteName: config.siteName,
      headerTitle: config.headerTitle,
      headerSubtitle: config.headerSubtitle,
      originalPrice: config.originalPrice,
      discountPercentage: config.discountPercentage,
      deliveryFee: config.deliveryFee,
      primaryColor: config.primaryColor,
      secondaryColor: config.secondaryColor,
      accentColor: config.accentColor,
      whatsappNumber: config.whatsappNumber,
      whatsappGroupLink: config.whatsappGroupLink,
      telegramGroupLink: config.telegramGroupLink
    }
  });

  const onSubmit = (data: any) => {
    config.updateConfig({
      ...data,
      originalPrice: Number(data.originalPrice),
      discountPercentage: Number(data.discountPercentage),
      deliveryFee: Number(data.deliveryFee)
    });
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'features', label: 'Features', icon: ListChecks },
    { id: 'faqs', label: 'FAQs', icon: MessageSquare },
    { id: 'reviews', label: 'Reviews', icon: Star }
  ];

  const handleVideoUpdate = (videos: any[]) => {
    config.updateConfig({ videos });
  };

  const handleImageUpdate = (productImages: any[]) => {
    config.updateConfig({ productImages });
  };

  const handleFeatureUpdate = (features: any[]) => {
    config.updateConfig({ features });
  };

  const handleFAQUpdate = (faqs: any[]) => {
    config.updateConfig({ faqs });
  };

  const handleReviewUpdate = (reviews: any[]) => {
    config.updateConfig({ reviews });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Site
            </Link>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === id 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'general' && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Existing general settings form */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">General Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Site Name</label>
                  <input
                    {...register('siteName')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Header Title</label>
                  <input
                    {...register('headerTitle')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Header Subtitle</label>
                  <input
                    {...register('headerSubtitle')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Original Price (₦)</label>
                  <input
                    type="number"
                    {...register('originalPrice')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Discount (%)</label>
                  <input
                    type="number"
                    {...register('discountPercentage')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Delivery Fee (₦)</label>
                  <input
                    type="number"
                    {...register('deliveryFee')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                  <input
                    {...register('whatsappNumber')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">WhatsApp Group Link</label>
                  <input
                    {...register('whatsappGroupLink')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telegram Group Link</label>
                  <input
                    {...register('telegramGroupLink')}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Theme Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Primary Color</label>
                  <input
                    type="color"
                    {...register('primaryColor')}
                    className="w-full h-10 rounded-lg border p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Secondary Color</label>
                  <input
                    type="color"
                    {...register('secondaryColor')}
                    className="w-full h-10 rounded-lg border p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Accent Color</label>
                  <input
                    type="color"
                    {...register('accentColor')}
                    className="w-full h-10 rounded-lg border p-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        )}

        {activeTab === 'videos' && (
          <VideoManager 
            videos={config.videos} 
            onUpdate={handleVideoUpdate} 
          />
        )}

        {activeTab === 'images' && (
          <ImageManager 
            images={config.productImages} 
            onUpdate={handleImageUpdate} 
          />
        )}

        {activeTab === 'features' && (
          <FeatureManager 
            features={config.features} 
            onUpdate={handleFeatureUpdate} 
          />
        )}

        {activeTab === 'faqs' && (
          <FAQManager 
            faqs={config.faqs} 
            onUpdate={handleFAQUpdate} 
          />
        )}

        {activeTab === 'reviews' && (
          <ReviewManager 
            reviews={config.reviews} 
            onUpdate={handleReviewUpdate} 
          />
        )}
      </div>
    </div>
  );
}

function VideoManager({ videos, onUpdate }: { videos: any[], onUpdate: (videos: any[]) => void }) {
  const [items, setItems] = useState(videos);

  const handleAdd = () => {
    setItems([...items, { 
      id: Date.now().toString(),
      url: '',
      thumbnail: ''
    }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id: string, field: string, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onUpdate(items);
    alert('Videos updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Videos</h2>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Video</span>
        </button>
      </div>

      <div className="space-y-4">
        {items.map((video) => (
          <div key={video.id} className="border rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Video URL</label>
                <input
                  type="text"
                  value={video.url}
                  onChange={(e) => handleChange(video.id, 'url', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
                <input
                  type="text"
                  value={video.thumbnail}
                  onChange={(e) => handleChange(video.id, 'thumbnail', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
            </div>
            <button
              onClick={() => handleRemove(video.id)}
              className="mt-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}

function ImageManager({ images, onUpdate }: { images: any[], onUpdate: (images: any[]) => void }) {
  const [items, setItems] = useState(images);

  const handleAdd = () => {
    setItems([...items, { 
      id: Date.now().toString(),
      url: '',
      alt: ''
    }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id: string, field: string, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onUpdate(items);
    alert('Images updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Images</h2>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Image</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((image) => (
          <div key={image.id} className="border rounded-lg p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={image.url}
                  onChange={(e) => handleChange(image.id, 'url', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alt Text</label>
                <input
                  type="text"
                  value={image.alt}
                  onChange={(e) => handleChange(image.id, 'alt', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              {image.url && (
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <button
                onClick={() => handleRemove(image.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}

function FeatureManager({ features, onUpdate }: { features: any[], onUpdate: (features: any[]) => void }) {
  const [items, setItems] = useState(features);

  const handleAdd = () => {
    setItems([...items, { 
      id: Date.now().toString(),
      icon: '',
      title: '',
      description: ''
    }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id: string, field: string, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onUpdate(items);
    alert('Features updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Features</h2>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Feature</span>
        </button>
      </div>

      <div className="space-y-4">
        {items.map((feature) => (
          <div key={feature.id} className="border rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Icon Name</label>
                <input
                  type="text"
                  value={feature.icon}
                  onChange={(e) => handleChange(feature.id, 'icon', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => handleChange(feature.id, 'title', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={feature.description}
                  onChange={(e) => handleChange(feature.id, 'description', e.target.value)}
                  className="w-full rounded-lg border p-2"
                  rows={2}
                />
              </div>
            </div>
            <button
              onClick={() => handleRemove(feature.id)}
              className="mt-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}

function FAQManager({ faqs, onUpdate }: { faqs: any[], onUpdate: (faqs: any[]) => void }) {
  const [items, setItems] = useState(faqs);

  const handleAdd = () => {
    setItems([...items, { 
      id: Date.now().toString(),
      question: '',
      answer: ''
    }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id: string, field: string, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onUpdate(items);
    alert('FAQs updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage FAQs</h2>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add FAQ</span>
        </button>
      </div>

      <div className="space-y-4">
        {items.map((faq) => (
          <div key={faq.id} className="border rounded-lg p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Question</label>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => handleChange(faq.id, 'question', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Answer</label>
                <textarea
                  value={faq.answer}
                  onChange={(e) => handleChange(faq.id, 'answer', e.target.value)}
                  className="w-full rounded-lg border p-2"
                  rows={3}
                />
              </div>
            </div>
            <button
              onClick={() => handleRemove(faq.id)}
              className="mt-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}

function ReviewManager({ reviews, onUpdate }: { reviews: any[], onUpdate: (reviews: any[]) => void }) {
  const [items, setItems] = useState(reviews);

  const handleAdd = () => {
    setItems([...items, { 
      id: Date.now().toString(),
      name: '',
      city: '',
      rating: 5,
      image: '',
      review: '',
      date: new Date().toISOString().split('T')[0]
    }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id: string, field: string, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onUpdate(items);
    alert('Reviews updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Reviews</h2>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Review</span>
        </button>
      </div>

      <div className="space-y-6">
        {items.map((review) => (
          <div key={review.id} className="border rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={review.name}
                  onChange={(e) => handleChange(review.id, 'name', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={review.city}
                  onChange={(e) => handleChange(review.id, 'city', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={review.rating}
                  onChange={(e) => handleChange(review.id, 'rating', parseInt(e.target.value))}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={review.image}
                  onChange={(e) => handleChange(review.id, 'image', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={review.date}
                  onChange={(e) => handleChange(review.id, 'date', e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Review</label>
                <textarea
                  value={review.review}
                  onChange={(e) => handleChange(review.id, 'review', e.target.value)}
                  className="w-full rounded-lg border p-2"
                  rows={3}
                />
              </div>
            </div>
            <button
              onClick={() => handleRemove(review.id)}
              className="mt-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}
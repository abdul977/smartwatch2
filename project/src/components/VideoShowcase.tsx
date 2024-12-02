import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      url: "https://videocdn.alibaba.com/icbu_vod_video/video_target/gv93-2f8e2476-a1ace553-92707862-61d1/trans/7629fc36-c180-4e6b-9747-f0fda3fde614-h264-hd.mp4",
      thumbnail: "https://sc04.alicdn.com/kf/H115b164f089a46448d86afd2603f1748h.jpg"
    },
    {
      url: "https://scontent.cdninstagram.com/o1/v/t16/f1/m86/B94CB96CA7E7737464F57D471D99F3B9_video_dashinit.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=102&vs=1949711755507601_4180060294&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9COTRDQjk2Q0E3RTc3Mzc0NjRGNTdENDcxRDk5RjNCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOME0zaHRmaXFuV0lNd0VBQ2dvVV9scHZ5Vk1icV9FQUFBRhUCAsgBACgAGAAbABUAACbiu%2B3zopjfPxUCKAJDMywXQD33S8an754YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYDJcO7vrkoyltB296otfJvXqUiOzlaIZUvikKaP_DK_AQ&oe=6741C56C&_nc_sid=d885a2",
      thumbnail: "https://doritstore.com/wp-content/uploads/2024/11/IMG_20241107_020322_375.jpg"
    }
  ];

  const handlePlayClick = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch(error => {
            console.error("Error playing video:", error);
            setHasError(true);
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoError = () => {
    console.error("Video loading error");
    setHasError(true);
    setIsPlaying(false);
  };

  const switchVideo = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(false);
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Force reload of video source
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative aspect-[9/16] max-h-[80vh] rounded-2xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          loop
          playsInline
          muted={isMuted}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          poster={videos[activeVideo].thumbnail}
          key={videos[activeVideo].url} // Force video element recreation when source changes
        >
          <source src={videos[activeVideo].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {(!isPlaying || hasError) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            {hasError ? (
              <div className="text-white text-center p-4">
                <p className="mb-2">Video playback error</p>
                <button
                  onClick={() => switchVideo((activeVideo + 1) % videos.length)}
                  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Try another video
                </button>
              </div>
            ) : (
              <button 
                onClick={handlePlayClick}
                className="bg-purple-600/90 p-8 rounded-full cursor-pointer transform hover:scale-110 transition-all duration-300 hover:bg-purple-600"
              >
                <Play className="w-16 h-16 text-white" />
              </button>
            )}
          </div>
        )}

        {isPlaying && !hasError && (
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={toggleMute}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-8 h-8 text-white" />
              ) : (
                <Volume2 className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => switchVideo(index)}
            className={`aspect-video rounded-lg overflow-hidden relative group ${
              activeVideo === index ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <img 
              src={video.thumbnail}
              alt={`Video thumbnail ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            {activeVideo === index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600 bg-opacity-75 p-2 rounded-full">
                  <Play className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-purple-50 rounded-xl p-6">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">1000+</div>
          <div className="text-sm md:text-base text-gray-600">Custom Watch Faces</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">5-10 Days</div>
          <div className="text-sm md:text-base text-gray-600">Battery Life</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">IPX-6</div>
          <div className="text-sm md:text-base text-gray-600">Water Resistance</div>
        </div>
      </div>
    </div>
  );
}
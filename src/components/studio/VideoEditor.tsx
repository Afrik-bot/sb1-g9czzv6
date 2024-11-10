import { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, ScissorsIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

export default function VideoEditor() {
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-white mb-2">Video Editor</h2>
        <p className="text-sm text-gray-400">Edit your video before uploading</p>
      </div>

      {!videoUrl ? (
        <label className="block w-full aspect-video border-2 border-dashed border-gray-700 rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
          <input
            type="file"
            accept="video/mp4,video/webm"
            className="hidden"
            onChange={handleFileSelect}
          />
          <div className="flex flex-col items-center justify-center h-full">
            <PlayIcon className="w-12 h-12 text-gray-500 mb-4" />
            <p className="text-gray-400">Select a video to edit</p>
          </div>
        </label>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              muted={isMuted}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4 mb-2">
                <button onClick={togglePlay} className="text-white">
                  {isPlaying ? (
                    <PauseIcon className="w-6 h-6" />
                  ) : (
                    <PlayIcon className="w-6 h-6" />
                  )}
                </button>
                
                <div className="flex-1">
                  <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={(e) => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = Number(e.target.value);
                      }
                    }}
                    className="w-full"
                  />
                </div>

                <button onClick={() => setIsMuted(!isMuted)} className="text-white">
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-6 h-6" />
                  ) : (
                    <SpeakerWaveIcon className="w-6 h-6" />
                  )}
                </button>
                
                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors">
              <ScissorsIcon className="w-5 h-5" />
              Trim Video
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
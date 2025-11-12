type Props = { url: string; title?: string };
export default function VideoEmbed({ url, title = "Video" }: Props) {
  // expects full https://www.youtube-nocookie.com/embed/VIDEO_ID or similar
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border">
      <iframe
        className="w-full h-full"
        src={url}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, DollarSign, MessageSquare, Globe, Upload, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { type ChallengeMedia } from "@shared/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import defaultImage from "@assets/generated_images/Stressed_trader_financial_crisis_3de0c993.png";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: DollarSign,
    title: "Expensive & Inaccessible Education",
    description: "Courses cost Rp 500K+ with no 'learn-to-earn' incentive",
    color: "text-red-400"
  },
  {
    icon: MessageSquare,
    title: "Untrustworthy Signals",
    description: "Telegram groups full of scams, fake track records, zero accountability",
    color: "text-orange-400"
  },
  {
    icon: Globe,
    title: "Global Platforms Not Local-Friendly",
    description: "High minimums (Rp 1M+), English-only, no IDR/QRIS/OVO integration",
    color: "text-blue-400"
  },
  {
    icon: AlertCircle,
    title: "Trading is Lonely",
    description: "Lack of supportive community leads to high dropout rates",
    color: "text-yellow-400"
  }
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [showUpload, setShowUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const { data: media } = useQuery<ChallengeMedia | null>({
    queryKey: ["/api/challenge-media"],
  });

  const uploadMutation = useMutation({
    mutationFn: async (imageData: string) => {
      return apiRequest("POST", "/api/challenge-media/upload", {
        headline: "78% Failure Rate: The Problem",
        description: "Beginner traders fail due to lack of education, guidance, and community support",
        imageData
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/challenge-media"] });
      toast({
        title: "Image uploaded successfully",
        description: "Your custom image has been set",
      });
      setShowUpload(false);
    },
    onError: () => {
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    },
  });

  const generateMutation = useMutation({
    mutationFn: async () => {
      // Generate/reset to default image
      // In production, this would call an actual image generation service
      return apiRequest("POST", "/api/challenge-media/generate", {
        headline: "The Problem: 78% Failure Rate",
        description: "Beginner traders fail due to lack of education, guidance, and community support",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/challenge-media"] });
      toast({
        title: "Image generated successfully",
        description: "Default illustration has been set",
      });
    },
    onError: () => {
      toast({
        title: "Generation failed",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const image = imageRef.current;
    
    if (!section || !headline || !subtitle || !image) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.from(image, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(headline, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(subtitle, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from(".problem-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4");
    }, section);

    return () => ctx.revert();
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target?.result as string;
      uploadMutation.mutate(imageData);
    };
    reader.readAsDataURL(file);
  };

  const displayImage = media?.imageUrl || defaultImage;

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-problem-headline"
          >
            78% Failure Rate: The Problem
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-problem-subtitle"
          >
            Beginner traders fail within 6 months due to lack of education, guidance, and community support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div
              ref={imageRef}
              className="relative rounded-lg overflow-hidden border border-gold-20"
              data-testid="container-problem-image"
            >
              <img
                src={displayImage}
                alt="Stressed trader illustration"
                className="w-full h-auto"
                data-testid="img-problem-illustration"
              />
              
              {!showUpload && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setShowUpload(!showUpload)}
                    data-testid="button-toggle-upload"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => generateMutation.mutate()}
                    disabled={generateMutation.isPending}
                    data-testid="button-generate-image"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {generateMutation.isPending ? "Generating..." : "Generate"}
                  </Button>
                </div>
              )}
            </div>

            {showUpload && (
              <Card className="mt-4 bg-card border-gold-20" data-testid="card-upload-controls">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Upload Custom Image
                      </label>
                      <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={uploadMutation.isPending}
                        data-testid="input-image-upload"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setShowUpload(false)}
                        data-testid="button-cancel-upload"
                      >
                        Cancel
                      </Button>
                      {uploadMutation.isPending && (
                        <span className="text-sm text-muted-foreground flex items-center" data-testid="text-uploading">
                          Uploading...
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="problem-card bg-card border-gold-20 hover-elevate"
                data-testid={`card-problem-${index}`}
              >
                <CardContent className="p-4 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                    <problem.icon className={problem.color} size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-testid={`text-problem-title-${index}`}>
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-problem-desc-${index}`}>
                      {problem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

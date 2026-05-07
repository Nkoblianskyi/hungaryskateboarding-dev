import Hero from "@/components/home/Hero"
import TrainingPreview from "@/components/home/TrainingPreview"
import HistoryPreview from "@/components/home/HistoryPreview"
import SkateboardTypes from "@/components/home/SkateboardTypes"
import UniqueBoards from "@/components/home/UniqueBoards"
import FunFacts from "@/components/home/FunFacts"
import Equipment from "@/components/home/Equipment"
import RulesPreview from "@/components/home/RulesPreview"
import BlogPreview from "@/components/home/BlogPreview"

export default function Home() {
  return (
    <>
      <Hero />
      <TrainingPreview />
      <HistoryPreview />
      <SkateboardTypes />
      <UniqueBoards />
      <FunFacts />
      <Equipment />
      <RulesPreview />
      <BlogPreview />
    </>
  )
}

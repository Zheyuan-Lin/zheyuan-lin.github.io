"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  Database,
  Server,
  Code,
  Cloud,
  Box,
  Terminal,
  FileCode,
  Cpu,
  Layers,
  GitBranch,
  BarChart,
  BrainCircuit,
  Workflow,
  Cog,
} from "lucide-react"
import type { ReactNode } from "react"

interface SkillBadgeProps {
  skill: string
  index: number
}

// Map skills to their respective icons
const getSkillIcon = (skill: string): ReactNode => {
  const iconSize = 14
  const iconClassName = "mr-1"

  // Programming Languages
  if (/java$/i.test(skill)) return <FileCode size={iconSize} className={iconClassName} />
  if (/python/i.test(skill)) return <Code size={iconSize} className={iconClassName} />
  if (/c#|c\+\+|c$/i.test(skill)) return <FileCode size={iconSize} className={iconClassName} />
  if (/javascript|js/i.test(skill)) return <FileCode size={iconSize} className={iconClassName} />
  if (/typescript|ts/i.test(skill)) return <FileCode size={iconSize} className={iconClassName} />
  if (/r$/i.test(skill)) return <BarChart size={iconSize} className={iconClassName} />
  if (/shell|bash/i.test(skill)) return <Terminal size={iconSize} className={iconClassName} />
  if (/matlab/i.test(skill)) return <BarChart size={iconSize} className={iconClassName} />

  // Cloud & DevOps
  if (/aws|amazon/i.test(skill)) return <Cloud size={iconSize} className={iconClassName} />
  if (/azure/i.test(skill)) return <Cloud size={iconSize} className={iconClassName} />
  if (/kubernetes|k8s/i.test(skill)) return <Box size={iconSize} className={iconClassName} />
  if (/docker/i.test(skill)) return <Box size={iconSize} className={iconClassName} />
  if (/git/i.test(skill)) return <GitBranch size={iconSize} className={iconClassName} />

  // AI & ML
  if (/pytorch|tensorflow|llm|rag|langchain|transformer/i.test(skill))
    return <BrainCircuit size={iconSize} className={iconClassName} />

  // Frameworks & Libraries
  if (/spring/i.test(skill)) return <Workflow size={iconSize} className={iconClassName} />
  if (/django/i.test(skill)) return <Workflow size={iconSize} className={iconClassName} />
  if (/angular|react|vue/i.test(skill)) return <Layers size={iconSize} className={iconClassName} />

  // Databases
  if (/sql|mongo|redis|database/i.test(skill)) return <Database size={iconSize} className={iconClassName} />

  // Tools & Others
  if (/jira/i.test(skill)) return <Cog size={iconSize} className={iconClassName} />
  if (/grpc/i.test(skill)) return <Server size={iconSize} className={iconClassName} />

  // Default icon for other skills
  return <Cpu size={iconSize} className={iconClassName} />
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <Badge variant="secondary" className="text-sm py-1 px-3 flex items-center">
        {getSkillIcon(skill)}
        {skill}
      </Badge>
    </motion.div>
  )
}


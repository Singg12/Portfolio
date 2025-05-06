import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
      {name}
    </Badge>
  )
}

import type { Creature } from '@/data/creatures'
import { threatLabel, tierIndex } from '@/data/creatures'
import { cn } from '@/lib/utils'

interface SealProps {
  creature: Creature
  size?: 'sm' | 'lg'
}

/** Wax-seal threat badge — oxblood for demons, desaturated gold for angels. */
export function Seal({ creature, size = 'lg' }: SealProps) {
  const label = threatLabel(creature)
  const tier = tierIndex(creature)
  const isAngel = creature.origin === 'aniol'
  const small = size === 'sm'

  return (
    <span
      className={cn(
        'wax-seal shrink-0 select-none',
        isAngel ? 'wax-seal-angel' : 'wax-seal-demon',
        small ? 'h-9 w-9' : 'h-16 w-16'
      )}
      title={`Poziom zagrożenia: ${label}`}
    >
      <span className={cn('font-fell leading-none', small ? 'text-[13px]' : 'text-xl')}>{label}</span>
      {!small && (
        <span className="mt-1 flex gap-[3px]" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-[4px] w-[4px] rounded-full',
                i <= tier
                  ? isAngel
                    ? 'bg-[#2e2206]'
                    : 'bg-[#f2e0c8]'
                  : isAngel
                    ? 'bg-[#2e2206]/25'
                    : 'bg-[#f2e0c8]/25'
              )}
            />
          ))}
        </span>
      )}
    </span>
  )
}

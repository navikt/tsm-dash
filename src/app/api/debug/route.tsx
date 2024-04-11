import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { logger } from '@navikt/next-logger'

export function GET() {
    logger.info('GET /api/debug/route.tsx')

    const header = headers().get('Authorization')
    return NextResponse.json({ debug: header })
}

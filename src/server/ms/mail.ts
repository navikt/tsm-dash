import { getToken, requestOboToken } from '@navikt/oasis'

export async function getInboxMail() {
    const token = getToken('token')

    const tokenSet = await requestOboToken(token, 'https://graph.microsoft.com/.default')

    const response = await fetch('https://graph.microsoft.com/v1.0/me/memberOf', {
        headers: {
            Authorization: `Bearer ${tokenSet}`,
        },
    })
}

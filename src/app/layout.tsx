import { Layout } from "@/components/layout/Layout"
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: 'Toucan',
  description: 'Toucan web is for testing purposes only',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Layout>
            {children}
          </Layout>
        </UserProvider>
      </body>
    </html>
  )
}

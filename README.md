# JSX Minecraft

Use JSX as domain-specific language (DSL) for Minecraft builds. This is a proof of concept.

## Quick Start

1. **Server Setup**: Use the provided `docker-compose.yml` to initiate a Minecraft server.
   - Address: `localhost:25565`

2. **Run Code**:
   - With Bun: `bun app.tsx`
   - With Node.js:
     ```bash
     pnpm build
     pnpm start
     ```

> **Note**: If not using Docker Compose, adjust RCON settings in `app.tsx`.

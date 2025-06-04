---
title: 🤖 Chatbot con IASDK usando Next.js 
description: Chatbot con IASDK usando Next.js
---
### Road to Build With AI GDG Sucre 2025

Esta guía te ayudará a crear un chatbot simple con inteligencia artificial y una interfaz de usuario con streaming en tiempo real. ✨

## 📋 Requisitos Previos

- Node.js 18+ y pnpm instalados 🟢
- Una API key de OpenAI 🔑

## 🚀 Paso 1: Crear la Aplicación

Crea una nueva aplicación Next.js:

```bash
pnpm create next-app@latest my-ai-app
cd my-ai-app
```

**⚠️ Importante:** Selecciona "sí" cuando te pregunte por App Router y Tailwind CSS.

## 📦 Paso 2: Instalar Dependencias

```bash
pnpm add ai @ai-sdk/react @ai-sdk/openai zod
```

## 🔐 Paso 3: Configurar la API Key

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
touch .env.local
```

Agrega tu API key de OpenAI:

```
OPENAI_API_KEY=tu_api_key_aqui
```

## ⚙️ Paso 4: Crear el Route Handler

Crea el archivo `app/api/chat/route.ts`:

```typescript
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Permitir respuestas streaming hasta 30 segundos
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

## 🎨 Paso 5: Crear la Interfaz de Usuario

Actualiza `app/page.tsx`:

```typescript
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'Usuario: ' : 'IA: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Escribe algo..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

## 🏃‍♂️ Paso 6: Ejecutar la Aplicación

```bash
pnpm run dev
```

Abre tu navegador en `http://localhost:3000` y ¡prueba tu chatbot! 🎉

## 🔧 Cómo Funciona

- **🛣️ Route Handler**: El archivo `route.ts` maneja las peticiones POST y se comunica con OpenAI
- **🪝 useChat Hook**: Simplifica el manejo del estado del chat y las interacciones del usuario
- **⚡ Streaming**: Las respuestas de la IA aparecen en tiempo real
- **💬 Messages**: Cada mensaje tiene un rol (usuario o IA) y partes que contienen el texto

## 💡 Conceptos Clave

- **🔧 AI SDK**: Interfaz unificada para trabajar con diferentes modelos de IA
- **🌊 Streaming**: Las respuestas aparecen gradualmente, no todas de una vez
- **🚦 App Router**: Nueva arquitectura de Next.js para mejor rendimiento
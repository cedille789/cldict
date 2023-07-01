/* eslint-disable no-var */

import type { PrismaClient } from "@prisma/client";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      auth: import("lucia-auth").AuthRequest;
    }
    // interface PageData {}
    // interface Platform {}
  }
  var prisma: PrismaClient;

  interface SessionUser {
    userId: string;
    username: string;
  }
}

/// <reference types="lucia" />
declare global {
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type UserAttributes = {
      username: string;
    };
  }
}

export {};

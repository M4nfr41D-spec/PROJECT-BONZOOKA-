/* Copyright (c) Manfred Foissner. All rights reserved. */
/* License: See LICENSE.txt in the project root. */

// ============================================================
// Assets.js - lightweight image loader for canvas sprites
// ============================================================

const _img = new Map();

function _load(key, src) {
  const img = new Image();
  img.src = src;
  _img.set(key, img);
  return img;
}

export const Assets = {
  init() {
    // Idempotent
    if (_img.size) return;
    _load('player', 'assets/sprites/Ship_normal.png');
    _load('enemy', 'assets/sprites/enemy_normal1.png');
    _load('elite', 'assets/sprites/enemy_elite_diver1.png');
    _load('boss', 'assets/sprites/Boss1.png');
    _load('obstacle', 'assets/sprites/Obstacle_normal.png');
  },

  get(key) {
    this.init();
    return _img.get(key) || null;
  },

  isReady(key) {
    const img = this.get(key);
    return !!(img && img.complete && img.naturalWidth > 0);
  },
};

# Compact Roll Card DnD5e

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FElfFriend-DnD%2Ffoundryvtt-compact-roll-card-5e%2Fmain%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange)
![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FElfFriend-DnD%2Ffoundryvtt-compact-roll-card-5e%2Freleases%2Flatest)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fcompact-roll-card-5e&colorB=4aa94a)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fcompact-roll-card-5e%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/compact-roll-card-5e/)
[![Foundry Hub Comments](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fcompact-roll-card-5e%2Fshield%2Fcomments)](https://www.foundryvtt-hub.com/package/compact-roll-card-5e/)

[![ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coke-%23FF5E5B)](https://ko-fi.com/elffriend)
[![patreon](https://img.shields.io/badge/-patreon-%23FF424D)](https://www.patreon.com/ElfFriend_DnD)

This module aims to make the core 5e (and MRE) chat cards more compact by changing the roll card layout as well as collapsing related cards together.

The module is almost entirely CSS, with one JS operation that adds a css class to chatcards during the renderChatCard hook.
## Features

When two chat cards occur almost simultaneously and both originate from the same actor, collapse them together and hide the actor's name in the header of the collapsed card.

Additionally, change the default roll card layout to make better use of the horizontal room generally available.

![Image demonstrating the changes to chat cards](https://cdn.discordapp.com/attachments/734095524822777976/930687880387506246/unknown.png)

## Compatibility

Compatible with:
- Core 5e Roller
- Minimal Rolling Enhancements

Super Charges:
- [Auto Roll NPC Save D&D5e](https://github.com/ElfFriend-DnD/foundryvtt-auto-roll-npc-save-5e)
- [Items with Rollable Tables DnD5e](https://github.com/ElfFriend-DnD/foundryvtt-items-with-rolltables-5e)
- [Attack Roll Check D&D5e](https://github.com/ElfFriend-DnD/foundryvtt-attack-roll-check-5e)
- [Item Effects to Chat D&D5e](https://github.com/ElfFriend-DnD/foundryvtt-item-effects-to-chat-5e)

Uncertain Compatiblity with:

- Any alternative rolling module other than Minimal Rolling Enhancements, these typically have their own takes on what a 'compact' layout for chat cards is, use that instead of this.

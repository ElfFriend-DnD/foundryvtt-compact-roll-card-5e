class CompactRollCard5e {
  static MODULE_NAME = "compact-roll-card-5e";
  static MODULE_TITLE = "Compact Roll Card DnD5e";

  static log(...args) {
    if (game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.MODULE_NAME)) {
      console.log(this.MODULE_TITLE, '|', ...args);
    }
  }
}

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(CompactRollCard5e.MODULE_NAME);
});


Hooks.on('renderChatMessage', async (chatMessage, html) => {
  const chatMessageIndex = game.messages.contents.indexOf(chatMessage);
  CompactRollCard5e.log('renderingChatMessage', {
    chatMessageIndex,
    minus: chatMessageIndex - 1,
  });
  const previousChatMessage = game.messages.contents[chatMessageIndex - 1];

  if (!previousChatMessage) {
    return;
  }

  if (chatMessage.timestamp - previousChatMessage.timestamp > 300) {
    return;
  }

  const speakerToken = chatMessage.speaker.token;
  const prevSpeakerToken = previousChatMessage.speaker.token;

  if (speakerToken && prevSpeakerToken && speakerToken === prevSpeakerToken) {
    // these are definitely from the same character
    html.addClass('compact-roll-card-5e-collapse-up');
    return;
  }

  const speakerActor = chatMessage.speaker.actor;
  const prevSpeakerActor = previousChatMessage.speaker.actor;

  if (speakerActor && prevSpeakerActor && speakerActor === prevSpeakerActor) {
    // these are probably from the same character
    html.addClass('compact-roll-card-5e-collapse-up');
    return;
  }
});
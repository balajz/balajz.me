# photos

Drop your photos in this folder, then run:

```bash
npm run photos
```

The script (`scripts/photos-manage.ts`) will:

- read EXIF date/time and rename each file to `p-YYYY-MM-DD-HH-MM-SS-000-1.jpg`
- downscale / compress anything that is too large
- write a `p-...json` sidecar with a `blurhash` (used as the loading placeholder)

Optional keys in the sidecar JSON:

```json
{
  "text": "Caption shown in the gallery",
  "lang": "en",
  "blurhash": "auto-generated"
}
```

Photos are picked up automatically by `photos/data.ts` (sorted newest first) and
rendered by `<PhotoGalleryAll />` on [/photos](../../pages/photos.md).

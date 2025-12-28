# Reels Management API Documentation

## Base URL
```
/api/
```

## Authentication
- Public endpoints (`/api/reels`) do not require authentication
- Management endpoints (`/management/api/reels/`) require JWT authentication

---

## Reel Types & Choices

### Reel Types

| Status | Description |
|--------|-------------|
| `reel` | Short-form vertical content (default) |
| `video` | Standard long-form video |

### Platforms

| Platform | Label |
|--------|-------------|
| `youtube` | YouTube |
| `instagram` | Instagram |
| `tiktok` | TikTok |
| `vimeo` | Vimeo |
| `custom` | Custom/Other |


### Status Types

| Status | Description |
|--------|-------------|
| `active` | Visible on public frontend |
| `draft` | Hidden/In-progress (default) |

---

## Public Endpoints (No Authentication Required)

### 1. List Reels (Public)
Get all active reels for public display.

**URL:** `GET /api/reels`

**Authentication:** Not required

**Response:**
```json
{
    "count": 1,
    "data": [
        {
            "id": 1,
            "title": "Office Tour 2025",
            "type": "reel",
            "platform": "instagram",
            "url": "https://instagram.com/reel/xyz",
            "thumbnail": "http://localhost:8000/media/uploads/thumb.jpg",
            "status": "active",
            "description": "A quick look inside our HQ.",
            "views": 1250,
            "likes": 300,
            "created_at": "2025-01-20T10:00:00Z",
            "updated_at": "2025-01-20T10:00:00Z"
        }
    ]
}
```



---

## Management Endpoints (Authentication Required)

### 2. List Staff Members (Management)
Get all reels (Active & Draft) with filtering options.

**URL:** `GET /management/api/reels/create`

**Authentication:** Required

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `search` | string | Search by title or description |
| `type` | string | Filter by type (reel, video) |
| `status` | string | Filter by status (active, draft) |


**Response:** Same structure as public endpoint but includes all statuses.

---

### 3. Create Reel
Create a new reel or video entry.

**URL:** `POST /management/api/reels/create`

**Authentication:** Required

**Request Body:**
```json
{
    "title": "New Product Launch",
    "type": "video",
    "platform": "youtube",
    "url": "https://youtube.com/watch?v=123",
    "thumbnail": 42,
    "status": "draft",
    "description": "Launch event details..."
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Title of the content (max 255 chars) |
| `type` | string | No | reel or video (default: reel) |
| `platform` | string | No | youtube, instagram, tiktok, etc. (default: youtube) |
| `url` | string | Yes | Full URL to the content |
| `thumbnail` | integer | No | media_file_id from Upload endpoint |
| `status` | string | No | active or draft (default: draft) |
| `description` | string | No | Text description |

**Success Response (201 Created):**
```json
{
    "id": 2,
    "title": "New Product Launch",
    "type": "video",
    "platform": "youtube",
    "url": "https://youtube.com/watch?v=123",
    "thumbnail": "http://localhost:8000/media/uploads/launch.jpg",
    "status": "draft",
    "description": "Launch event details...",
    "views": 0,
    "likes": 0,
    "created_at": "2025-01-21T10:00:00Z",
    "updated_at": "2025-01-21T10:00:00Z"
}
```

---

### 5. Get Reel Details
Retrieve details of a specific reel.

**URL:** `GET /management/api/reels/<id>`

**Authentication:** Required

**Response:** Same structure as create response.

---

### 6. Update Reel
Update an existing staff member (full or partial update).

**URL:** `PUT /management/api/reels/<id>` or `PATCH /management/api/reels/<id>`

**Authentication:** Required

**Request Body (PUT - Full Update):**
```json
{
    "id": 2,
    "title": "New Product Launch",
    "type": "video",
    "platform": "youtube",
    "url": "https://youtube.com/watch?v=123",
    "thumbnail": "http://localhost:8000/media/uploads/launch.jpg",
    "status": "draft",
    "description": "Launch event details...",
    "views": 0,
    "likes": 0,
    "created_at": "2025-01-21T10:00:00Z",
    "updated_at": "2025-01-21T10:00:00Z"
}
```

**Request Body (PATCH - Partial Update):**
```json
{
    "title": "Updated Title",
    "description": "New description text."
}
```

**Response: Returns the updated Reel object.**


---

### 7. Delete Reel
Permanently delete a reel.

**URL:** `DELETE /management/api/reels/<id>`

**Authentication:** Required

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Reel deleted successfully"
}
```

---

### 8. Update Status
Quickly change the visibility status of a reel.

**URL:** `PATCH /management/api/reels/<id>/status`

**Authentication:** Required

**Request Body:**
```json
{
    "status": "active"
}
```


**Response:**
```json
{
    "success": true,
    "status": "active"
}
```

---

### 9. Update Metrics
Update view or like counts (useful for frontend sync or background jobs).

**URL:** `PATCH /management/api/reels/<id>/metrics`

**Authentication:** Required

**Request Body:**
```json
{
    "views": 1500,
    "likes": 400
}
```


**Response:**
```json
{
    "success": true,
    "views": 1500,
    "likes": 400
}
```

---


## Notes

1. **Thumbnails**: Thumbnails must be uploaded via the `/upload-thumbnail` endpoint first. The returned `media_file_id` is then sent in the `thumbnail` field when creating/updating a reel.

2. **Validation**: 
   - `url` must be a valid URL format.
   - `status` must be one of the defined choices.
   - `type` must be one of the defined choices.

3. **Date Fields**: `created_at` and `updated_at` are read-only and automatically managed by the system.


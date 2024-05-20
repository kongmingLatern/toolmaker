export function formatResponseType(
  response: Record<string, any>,
  targetDataType?: any,
) {
  return response
}

export function formatResponse(response: any, format: any): any {
  return response.data.map((item: any) => formatItem(item, format))
}

function formatItem(item: any, format: any): any {
  const formattedItem: any = {}

  for (const key in format) {
    if (Array.isArray(item[key])) {
      formattedItem[format[key]] = item[key].map((child: any) =>
        formatItem(child, format),
      )
    }
    else if (typeof format[key] === 'object') {
      formattedItem[key] = formatItem(item[key], format[key])
    }
    else {
      formattedItem[format[key]] = item[key]
    }
  }

  return formattedItem
}
